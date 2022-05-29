// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "./helpers/EllipticCurve.sol";

contract BlindSign {
    uint256 private ecPrivKey;
    uint256 private k1Dash;
    uint256 private k2Dash;

    uint256 public l1;
    uint256 public l2;

    //EC Public Key
    uint256 public Qx;
    uint256 public Qy;

    // R1Dash
    uint256 public xr1Dash;
    uint256 public yr1Dash;

    //R2Dash
    uint256 public xr2Dash;
    uint256 public yr2Dash;

    uint256 public r1Dash;
    uint256 public r2Dash;

    //Curve Params
    uint256 public constant GX = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
    uint256 public constant GY = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;
    uint256 public constant AA = 0;
    uint256 public constant BnB = 7;
    uint256 public constant PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;
    uint256 public constant n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

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
        ecPrivKey = _ecPrivKey;
        k1Dash = _k1Dash;
        k2Dash = _k2Dash;

        Qx = _Qx;
        Qy = _Qy;

        l1 = _l1;
        l2 = _l2;

        xr1Dash = _xr1Dash;
        yr1Dash = _yr1Dash;

        xr2Dash = _xr2Dash;
        yr2Dash = _yr2Dash;

        r1Dash = xr1Dash % n;
        r2Dash = xr2Dash % n;
    }

    function requestBlindSignature(uint256 m1Dash, uint256 m2Dash)
        public
        view
        returns (uint256 s1Dash, uint256 s2Dash)
    {
        s1Dash = ((ecPrivKey * m1Dash) % n) - ((r1Dash * k1Dash * l1) % n);
        s2Dash = ((ecPrivKey * m2Dash) % n) - ((r2Dash * k2Dash * l2) % n);
    }

    function verifyBlindSignature(
        uint256 s,
        uint256 Rx,
        uint256 Ry,
        uint256 r,
        uint256 m
    ) public view returns (bool isValid) {
        // mQ = sG + rR;

        uint256[2] memory mQ;

        (mQ[0], mQ[1]) = EllipticCurve.ecMul(m, Qx, Qy, AA, PP);

        uint256[2] memory sG;

        (sG[0], sG[1]) = EllipticCurve.ecMul(s, GX, GY, AA, PP);

        uint256[2] memory rR;

        (rR[0], rR[1]) = EllipticCurve.ecMul(r, Rx, Ry, AA, PP);

        uint256[2] memory sG_rR;

        (sG_rR[0], sG_rR[1]) = EllipticCurve.ecAdd(sG[0], sG[1], rR[0], rR[1], AA, PP);

        if (mQ[0] == sG_rR[0] && mQ[1] == sG_rR[1]) {
            isValid = true;
        } else {
            isValid = false;
        }
    }
}
