import { Wallet, ethers } from "ethers";

import Artifact from "../artifacts/contracts/BlindVoting.sol/BlindVoting.json";
import { BlindVoting } from "../types";

const url = "http://127.0.0.1:8545/";
const provider = new ethers.providers.JsonRpcProvider(url);

let signer: ethers.providers.JsonRpcSigner;
let adminSigner: ethers.providers.JsonRpcSigner;
let blindVoting: BlindVoting;
let blindVotingAdmin: BlindVoting;
let blindVotingStealth: BlindVoting;

const contractAddress = "0x895f20be9a6cdf6eec4e542e45e769079737e43a";

const initEther = async () => {
  signer = provider.getSigner(1);
  adminSigner = provider.getSigner(0);

  const wallet = Wallet.createRandom(provider);

  const signerAddress = await signer.getAddress();
  const adminAddress = await adminSigner.getAddress();

  blindVoting = new ethers.Contract(contractAddress, Artifact.abi, signer) as BlindVoting;
  blindVotingStealth = new ethers.Contract(contractAddress, Artifact.abi, wallet) as BlindVoting;
  blindVotingAdmin = new ethers.Contract(contractAddress, Artifact.abi, adminSigner) as BlindVoting;
};

export { provider, signer, adminSigner, blindVoting, blindVotingAdmin, blindVotingStealth, initEther };
