// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BlindSign.sol";
import "hardhat/console.sol";

contract BlindVoting is Ownable {
    struct Party {
        uint256 partyCode;
        string partyName;
        bool exists;
    }

    BlindSign public signHelper;

    // partyCode -> Party
    mapping(uint256 => Party) parties;

    // partyCode -> votes
    mapping(uint256 => uint256) tally;

    constructor(
        uint256 _x,
        uint256 _r,
        uint256 _Yx,
        uint256 _Yy,
        uint256 _Hx,
        uint256 _Hy
    ) {
        console.log(_x, _r);

        signHelper = new BlindSign(_x, _r, _Yx, _Yy, _Hx, _Hy);
    }

    function getY() public view returns (uint256 x, uint256 y) {
        (x, y) = signHelper.getY();
    }

    function getH() public view returns (uint256 x, uint256 y) {
        (x, y) = signHelper.getH();
    }

    function addParty(uint256 partyCode, string memory partyName) public onlyOwner {
        Party memory newParty = parties[partyCode];
        newParty.partyCode = partyCode;
        newParty.partyName = partyName;
        newParty.exists = true;

        parties[partyCode] = newParty;

        console.log(parties[partyCode].partyCode == 1022);
    }

    function getVotesForPartyCode(uint256 partyCode) public view returns (uint256 votes) {
        require(parties[partyCode].partyCode == partyCode, "Party Code doesn't exist");
        votes = tally[partyCode];
    }

    function requestBlindSign(uint256 u2) public view returns (uint256 z) {
        z = signHelper.requestBlindSignature(u2);
    }

    function castVote(
        uint256 ZdashX,
        uint256 ZdashY,
        uint256 KX,
        uint256 KY,
        uint256 MX,
        uint256 MY,
        uint256 PX,
        uint256 PY,
        uint256 u1,
        uint256 partyCode
    ) public {
        require(parties[partyCode].partyCode == partyCode, "Party Code doesn't exist");
        require(signHelper.verifyBlindSignature(ZdashX, ZdashY, KX, KY, MX, MY, PX, PY, u1), "Sign not valid");

        tally[partyCode] = tally[partyCode] + 1;
    }
}
