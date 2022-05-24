// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract ECBlindSign {
    uint256 public constant n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

    uint256 private ecPrivKey;
    uint256 private k1Dash;
    uint256 private k2Dash;

    uint256 public l1;
    uint256 public l2;

    // R1Dash
    uint256 public xr1Dash;
    uint256 public yr1Dash;

    //R2Dash
    uint256 public xr2Dash;
    uint256 public yr2Dash;

    constructor(
        uint256 _ecPrivKey,
        uint256 _k1Dash,
        uint256 _k2Dash,
        uint256 _l1,
        uint256 _l2,
        uint256 _xr1Dash,
        uint256 _yr1Dash,
        uint256 _xr2Dash,
        uint256 _yr2Dash
    ) {
        ecPrivKey = _ecPrivKey;
        k1Dash = _k1Dash;
        k2Dash = _k2Dash;

        l1 = _l1;
        l2 = _l2;

        xr1Dash = _xr1Dash;
        yr1Dash = _yr1Dash;

        xr2Dash = _xr2Dash;
        yr2Dash = _yr2Dash;
    }

    function requestBlindSignature(uint256 m1Dash, uint256 m2Dash)
        public
        view
        returns (uint256 s1Dash, uint256 s2Dash)
    {
        s1Dash = ecPrivKey * m1Dash;
    }
}
