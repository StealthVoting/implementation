// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract Voting {
    struct Voter {
        bool isVoted;
        uint256 choiceCode;
        bool isRegistered;
    }

    struct Party {
        string name;
        uint256 code;
    }

    mapping(address => Voter) public voters;
    mapping(uint256 => Party) public parties;
    mapping(uint256 => uint256) public votes;

    // Phase 1
    function registerParty(uint256 code, string memory name) public {
        parties[code] = Party(name, code);
    }

    function registerVoter() public {
        voters[msg.sender] = Voter(false, 0, true);
    }

    //
    function castVote(uint256 choiceCode) public {
        require(voters[msg.sender].isRegistered, "Voter is not registered.");
        require(!voters[msg.sender].isVoted, "Voter already voted.");

        votes[choiceCode] = votes[choiceCode] + 1;

        voters[msg.sender].isVoted = true;
    }

    function getElectionResult(uint256 partyCode) public view returns (uint256) {
        return votes[partyCode];
    }
}
