import { blindVoting, blindVotingAdmin } from './ethers'
import { randNum } from './functions';

const generateVoter = async (setIsLoading, setMessage, setData) => {
  setTimeout(async () => {
    // const H = await blindVotingAdmin.getH();
    // const Y = await blindVotingAdmin.getY();
    // console.log("H --> " + H);
    // console.log("Y --> " + Y);


    setIsLoading(false);
    setMessage("true");
    setData("Something useless");
  }, 1500);
}

export {
  generateVoter
}