import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
// import BN from "bn.js";
import { assert } from "console";
import crypto from "crypto";
import { curve, ec } from "elliptic";
import { BigNumber } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";
import * as web3BN from "web3-utils";

import { BlindVoting } from "../../src/types";
import { Signers } from "../types";

// function randNum(): bigint {
//   const bytes = new Uint8Array(8);

//   crypto.getRandomValues(bytes);

//   const bytesHex = bytes.reduce((o, v) => o + ("00" + v.toString(16)).slice(-2), "");

//   return BigInt("0x" + bytesHex);
// }

describe("Unit tests for BlindVoting", function () {
  before(async function () {
    this.signers = {} as Signers;
    this.EC = new ec("secp256k1");

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("BlindVoting", function () {
    // Signer Data
    const x = web3BN.toBN("0x81C603CC");
    const r = web3BN.toBN("0xDCA717CE");

    let Y: ec.KeyPair;
    let H: ec.KeyPair;

    // Voter Data
    let a, b, w;
    let u1,
      u2,
      M: curve.base.BasePoint,
      K: ec.KeyPair,
      P: curve.base.BasePoint,
      Q: curve.base.BasePoint,
      A: ec.KeyPair,
      B: ec.KeyPair;

    let z: BigNumber;

    before(async function () {
      // Signer
      // x = randNum();
      // r = randNum();

      Y = this.EC.keyFromPrivate(x.toString(16));
      H = this.EC.keyFromPrivate(r.toString(16));

      // // Voter
      a = web3BN.toBN("0x51B52D04");
      b = web3BN.toBN("0x17CF17F7");
      w = web3BN.toBN("0x854A8029");

      A = this.EC.keyFromPrivate(a.toString(16));
      B = this.EC.keyFromPrivate(b.toString(16));
      K = this.EC.keyFromPrivate(w.toString(16));

      const artifactInput = [
        x.toString(10),
        r.toString(10),
        Y.getPublic().getX().toString(10),
        Y.getPublic().getY().toString(10),
        H.getPublic().getX().toString(10),
        H.getPublic().getY().toString(10),
      ];

      const blindVotingArtifact = await artifacts.readArtifact("BlindVoting");

      this.blindVoting = (await waffle.deployContract(
        this.signers.admin,
        blindVotingArtifact,
        artifactInput,
      )) as BlindVoting;
    });

    it("should deploy contract", async function () {
      // expect(await this.blindVoting.connect(this.signers.admin))
    });

    it("should be able to add new party", async function () {
      console.log(this.signers.admin.address);

      await this.blindVoting.connect(this.signers.admin).addParty(1022, "PartyA");

      const votes = await this.blindVoting.connect(this.signers.admin).getVotesForPartyCode(1022);

      console.log("new party votes:-", votes);

      assert(votes.toNumber() === 0);
    });

    it("should generate a signature", async function () {
      const m = BigInt(1022);

      const hasher = crypto.createHash("sha1");
      hasher.update(Buffer.from(A.getPrivate().toString(16)));
      hasher.update(Buffer.from(A.getPublic().getX().toString(16)));
      hasher.update(Buffer.from(A.getPublic().getY().toString(16)));

      hasher.update(Buffer.from(B.getPrivate().toString(16)));
      hasher.update(Buffer.from(B.getPublic().getX().toString(16)));
      hasher.update(Buffer.from(B.getPublic().getY().toString(16)));

      hasher.update(Buffer.from(m.toString(16)));

      u1 = web3BN.toBN(hasher.digest("hex"));

      // console.log("u1:- ", u1.toString(10));

      u2 = u1.add(b);

      z = await this.blindVoting.connect(this.signers.admin).requestBlindSign(u2.toString(10));

      // console.log("z:- ", z.toString());

      assert(z != null);
    });

    it("should validate the signature", async function () {
      console.log(this.signers.admin.address);

      P = Y.getPublic().mul(a);
      Q = Y.getPublic().mul(b);

      const HQ = Q.add(H.getPublic());
      M = HQ.mul(a);

      const zBN = web3BN.toBN(z.toHexString());
      const temp1 = zBN.mul(a).add(w);

      const Zdash = this.EC.keyFromPrivate(temp1.toString(16));

      await this.blindVoting
        .connect(this.signers.admin)
        .castVote(
          Zdash.getPublic().getX().toString(10),
          Zdash.getPublic().getY().toString(10),
          K.getPublic().getX().toString(10),
          K.getPublic().getY().toString(10),
          M.getX().toString(10),
          M.getY().toString(10),
          P.getX().toString(10),
          P.getY().toString(10),
          u1.toString(10),
          web3BN.toBN(1022).toString(10),
        );

      // console.log("isValid:- ", isValid);
      console.log(this.signers.admin.address);

      const votes = await this.blindVoting.connect(this.signers.admin).getVotesForPartyCode(1022);
      console.log("votes at new cast:-", votes);

      assert(votes != null);
    });
  });
});
