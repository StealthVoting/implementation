import { ethers } from "ethers";

import Artifact from "../artifacts/contracts/BlindVoting.sol/BlindVoting.json";
import { BlindVoting } from "../types";
import { randNum } from "./functions";

const url = "http://127.0.0.1:8545/";
const provider = new ethers.providers.JsonRpcProvider(url);

let signer: ethers.providers.JsonRpcSigner;
let adminSigner: ethers.providers.JsonRpcSigner;
let blindVoting: BlindVoting;
let blindVotingAdmin: BlindVoting;

const contractAddress = "0x0f5E4B52B227FA843312F69838e00A9e2BAB9245";

const initEther = async () => {
  signer = provider.getSigner(1);
  adminSigner = provider.getSigner(0);

  const signerAddress = await signer.getAddress();
  const adminAddress = await adminSigner.getAddress();

  blindVoting = new ethers.Contract(contractAddress, Artifact.abi, signer) as BlindVoting;
  blindVotingAdmin = new ethers.Contract(contractAddress, Artifact.abi, adminSigner) as BlindVoting;
};

export { provider, signer, adminSigner, blindVoting, blindVotingAdmin, initEther };
