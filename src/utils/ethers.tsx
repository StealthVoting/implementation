import { ethers } from "ethers";
import { BlindVoting } from "../types";
import Artifact from "../abi/BlindVoting.json";

const url = "http://127.0.0.1:8545/"
const provider = new ethers.providers.JsonRpcProvider(url);

let signer: ethers.providers.JsonRpcSigner;
let adminSigner: ethers.providers.JsonRpcSigner;
let blindVoting: BlindVoting;
let blindVotingAdmin: BlindVoting;

(async () => {
  signer = provider.getSigner(1);
  adminSigner = provider.getSigner(0);

  blindVoting = new ethers.Contract(signer._address, Artifact.abi, provider) as BlindVoting;
  blindVotingAdmin = new ethers.Contract(adminSigner._address, Artifact.abi, provider) as BlindVoting;

  const addr = await signer.getAddress();
  console.log(addr);
})();

export {
  provider,
  signer,
  adminSigner,
  blindVoting,
  blindVotingAdmin
}