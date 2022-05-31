import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ec } from "elliptic";
import { artifacts, ethers, waffle } from "hardhat";

import { BlindVoting } from "../../src/types";
import { Signers } from "../types";

function rnd256(): bigint {
  const bytes = new Uint8Array(32);

  window.crypto.getRandomValues(bytes);

  const bytesHex = bytes.reduce((o, v) => o + ("00" + v.toString(16)).slice(-2), "");

  return BigInt("0x" + bytesHex);
}

function gcd(a: bigint, b: bigint): bigint {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function randCoPrime(): bigint[] {
  const wz: bigint[] = [];

  wz[0] = rnd256();

  for (let i = 2; i < 2 ** 32; i++) {
    if (gcd(wz[0], BigInt(i)) === BigInt(1)) {
      wz[1] = BigInt(i);
      return wz;
    }
  }

  return wz;
}

function extendedEuclid(wz: bigint[], ed: bigint[]) {
  if (wz[0] === BigInt(0)) {
    ed[0] = BigInt(0);
    ed[1] = BigInt(1);
    return;
  }

  wz[0] = wz[1] % wz[0];
  wz[1] = wz[0];

  extendedEuclid(wz, ed);

  ed[0] = ed[1] - (wz[1] / wz[0]) * ed[0];
  ed[1] = ed[0];
}

describe("Unit tests for BlindVoting", function () {
  before(async function () {
    this.signers = {} as Signers;
    this.EC = new ec("secp256k1");

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("BlindVoting", function () {
    let ecKeyPair: ec.KeyPair;
    let kR1Dash: ec.KeyPair, kR2Dash: ec.KeyPair;
    let l1: bigint, l2: bigint;

    const a = rnd256();
    const b = rnd256();
    const wz = randCoPrime();
    const ed: bigint[] = [];
    extendedEuclid(wz, ed);

    beforeEach(async function () {
      ecKeyPair = this.EC.genKeyPair();
      kR1Dash = this.EC.genKeyPair();
      kR2Dash = this.EC.genKeyPair();

      ecKeyPair.getPrivate();

      l1 = rnd256();
      l2 = rnd256();

      const artifactInput = [
        ecKeyPair.getPrivate().toString(10),
        kR1Dash.getPrivate().toString(10),
        kR2Dash.getPrivate().toString(10),
        ecKeyPair.getPublic().getX().toString(10),
        ecKeyPair.getPublic().getY().toString(10),
        l1.toString(10),
        l2.toString(10),
        kR1Dash.getPublic().getX().toString(10),
        kR1Dash.getPublic().getY().toString(10),
        kR2Dash.getPublic().getX().toString(10),
        kR2Dash.getPublic().getY().toString(10),
      ];

      const blindVotingArtifact = await artifacts.readArtifact("BlindVoting");

      this.blindVoting = (await waffle.deployContract(
        this.signers.admin,
        blindVotingArtifact,
        artifactInput,
      )) as BlindVoting;
    });

    it("should create valid blind signatures", async function () {
      // this.blindVoting.connect(this.signers.admin).requestBlindSign();
    });
  });
});
