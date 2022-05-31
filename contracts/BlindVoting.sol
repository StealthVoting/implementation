// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BlindSign.sol";

contract BlindVoting is Ownable {
    struct Party {
        uint256 partyCode;
        string partyName;
    }

    BlindSign public signHelper;

    // partyCode -> Party
    mapping(uint256 => Party) parties;

    // partyCode -> votes
    mapping(uint256 => uint256) tally;

    constructor(
        uint256 _ecPrivKey,
        uint256 _k1Dash,
        uint256 _k2Dash,
        uint256 _Qx,
        uint256 _Qy,
        uint256 _l1,
        uint256 _l2,
        uint256 _xr1Dash,
        uint256 _yr1Dash,
        uint256 _xr2Dash,
        uint256 _yr2Dash
    ) {
        signHelper = new BlindSign(
            _ecPrivKey,
            _k1Dash,
            _k2Dash,
            _Qx,
            _Qy,
            _l1,
            _l2,
            _xr1Dash,
            _yr1Dash,
            _xr2Dash,
            _yr2Dash
        );
    }

    function addParty(uint256 partyCode, string memory partyName) public onlyOwner {
        parties[partyCode] = Party(partyCode, partyName);
    }

    function getVotesForPartyCode(uint256 partyCode) public view onlyOwner returns (uint256 votes) {
        votes = tally[partyCode];
    }

    function requestBlindSign(uint256 m1Dash, uint256 m2Dash) public view returns (uint256 s1Dash, uint256 s2Dash) {
        (s1Dash, s2Dash) = signHelper.requestBlindSignature(m1Dash, m2Dash);
    }

    function castVote(
        uint256 s,
        uint256 Rx,
        uint256 Ry,
        uint256 r,
        uint256 partyCode
    ) public {
        require(parties[partyCode].partyCode == partyCode);
        require(signHelper.verifyBlindSignature(s, Rx, Ry, r, partyCode));

        tally[partyCode] = tally[partyCode] + 1;
    }
}
