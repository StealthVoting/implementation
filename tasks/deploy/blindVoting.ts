import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ec } from "elliptic";
import getRandomValues from "get-random-values";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { BlindVoting, BlindVoting__factory } from "../../src/types";

function randNum(): bigint {
  const bytes = new Uint8Array(4);

  getRandomValues(bytes);

  const bytesHex = bytes.reduce((o, v) => o + ("00" + v.toString(16)).slice(-2), "");

  return BigInt("0x" + bytesHex);
}

task("deploy:BlindVoting").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const x = randNum();
  const r = randNum();

  const EC = new ec("secp256k1");

  const Y = EC.keyFromPrivate(x.toString(16));
  const H = EC.keyFromPrivate(r.toString(16));

  const signers: SignerWithAddress[] = await ethers.getSigners();
  const blindVotingFactory: BlindVoting__factory = await ethers.getContractFactory("BlindVoting");
  const blindVoting: BlindVoting = await blindVotingFactory
    .connect(signers[0])
    .deploy(
      x.toString(10),
      r.toString(10),
      Y.getPublic().getX().toString(10),
      Y.getPublic().getY().toString(10),
      H.getPublic().getX().toString(10),
      H.getPublic().getY().toString(10),
    );

  await blindVoting.deployed();

  console.log("Blind Voting deployed to:- ", blindVoting.address);
});
