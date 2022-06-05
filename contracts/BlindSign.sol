// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "./helpers/EllipticCurve.sol";
import "hardhat/console.sol";

contract BlindSign {
    // Private Data
    uint256 private x;
    uint256 private r;

    // Public Data
    uint256 public Yx; // Y = xG; EC public key
    uint256 public Yy;

    uint256 public Hx; // H = rG; signing public key
    uint256 public Hy;

    //Curve Params
    uint256 public constant GX = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
    uint256 public constant GY = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;
    uint256 public constant AA = 0;
    uint256 public constant BB = 7;
    uint256 public constant PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;
    uint256 public constant n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

    constructor(
        uint256 _x,
        uint256 _r,
        uint256 _Yx,
        uint256 _Yy,
        uint256 _Hx,
        uint256 _Hy
    ) {
        x = _x;
        r = _r;
        Yx = _Yx;
        Yy = _Yy;
        Hx = _Hx;
        Hy = _Hy;
    }

    function requestBlindSignature(uint256 u2) public view returns (uint256 z) {
        z = r + (x * u2);
    }

    function verifyBlindSignature(
        uint256 ZdashX,
        uint256 ZdashY,
        uint256 KX,
        uint256 KY,
        uint256 MX,
        uint256 MY,
        uint256 PX,
        uint256 PY,
        uint256 u1
    ) public view returns (bool isValid) {
        uint256 tempKMx;
        uint256 tempKMy;
        (tempKMx, tempKMy) = EllipticCurve.ecAdd(KX, KY, MX, MY, AA, PP);

        uint256 lhsX;
        uint256 lhsY;
        (lhsX, lhsY) = EllipticCurve.ecSub(ZdashX, ZdashY, tempKMx, tempKMy, AA, PP);

        uint256 rhsX;
        uint256 rhsY;
        (rhsX, rhsY) = EllipticCurve.ecMul(u1, PX, PY, AA, PP);

        console.log("LHS:- ", lhsX, " ", lhsY);
        console.log("RHS:- ", rhsX, " ", rhsY);

        if (lhsX == rhsX && lhsY == rhsY) {
            isValid = true;
        } else {
            isValid = false;
        }
    }
}
