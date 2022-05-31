import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ec } from "elliptic";
import type { Fixture } from "ethereum-waffle";

import { BlindSign, BlindVoting, Voting } from "../src/types";
import type { Greeter } from "../src/types/Greeter";

declare module "mocha" {
  export interface Context {
    voting: Voting;
    blindVoting: BlindVoting;
    blindSign: BlindSign;
    greeter: Greeter;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    EC: ec;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
