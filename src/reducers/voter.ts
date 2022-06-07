import { AsyncThunkOptions, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ec } from "elliptic";
import sha1 from "js-sha1";
import * as web3BN from "web3-utils";

import { RootState } from "../store";
import { blindVoting } from "../utils/ethers";
import { randNum } from "../utils/functions";

export const createNewVoter = createAsyncThunk("voter/createNewVoter", async () => {
  const EC = new ec("secp256k1");

  const a = randNum();
  const b = randNum();
  const w = randNum();

  const A = EC.keyFromPrivate(a.toBigInt().toString(16));
  const B = EC.keyFromPrivate(b.toBigInt().toString(16));
  const K = EC.keyFromPrivate(w.toBigInt().toString(16));

  const Y = await blindVoting.getY();
  const H = await blindVoting.getH();

  const Ypoint = EC.keyFromPublic({ x: Y.x.toBigInt().toString(16), y: Y.y.toBigInt().toString(16) });
  const Hpoint = EC.keyFromPublic({ x: H.x.toBigInt().toString(16), y: H.y.toBigInt().toString(16) });

  const P = Ypoint.getPublic().mul(web3BN.toBN(a.toBigInt().toString(16)));
  const Q = Ypoint.getPublic().mul(web3BN.toBN(b.toBigInt().toString(16)));

  const HQ = Q.add(Hpoint.getPublic());
  const M = HQ.mul(web3BN.toBN(a.toBigInt().toString(16)));

  const { pubKey } = await fetch("/idp").then(response => {
    return response.json();
  });

  console.log(pubKey);

  const IDPKey = EC.keyFromPublic({ x: pubKey.x, y: pubKey.y });

  const R = IDPKey.getPublic().mul(web3BN.toBN(a.toBigInt().toString(16)));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ voterR: R.encode("hex", false) }),
  };

  fetch("/voter", requestOptions).then(response => console.log(response));

  return {
    a: "0x" + a.toBigInt().toString(16),
    b: "0x" + b.toBigInt().toString(16),
    w: "0x" + w.toBigInt().toString(16),
    A: { x: A.getPublic().getX().toString(16), y: A.getPublic().getY().toString(16) },
    B: { x: B.getPublic().getX().toString(16), y: B.getPublic().getY().toString(16) },
    K: { x: K.getPublic().getX().toString(16), y: K.getPublic().getY().toString(16) },
    P: { x: P.getX().toString(16), y: P.getY().toString(16) },
    Q: { x: Q.getX().toString(16), y: Q.getY().toString(16) },
    M: { x: M.getX().toString(16), y: M.getY().toString(16) },
  } as VoterInitState;
});

export const requestBlindSignature = createAsyncThunk(
  "voter/requestBlindSignature",
  async (args: number, { getState }) => {
    const EC = new ec("secp256k1");

    const { voter } = getState() as RootState;

    const hasher = sha1.create();
    hasher.update(web3BN.toBN(String(voter.a)).toString(16));
    hasher.update(String(voter.A?.x));
    hasher.update(String(voter.A?.y));

    hasher.update(web3BN.toBN(String(voter.b)).toString(16));
    hasher.update(String(voter.B?.x));
    hasher.update(String(voter.B?.y));

    hasher.update(web3BN.toBN(args).toString(16));

    const a = web3BN.toBN(String(voter.a));
    const b = web3BN.toBN(String(voter.b));
    const w = web3BN.toBN(String(voter.w));
    const u1 = web3BN.toBN("0x" + hasher.hex());
    const u2 = u1.add(b);

    console.log(u1.toString(10), u2.toString(10));

    const z = await blindVoting.requestBlindSign(u2.toString(10));

    const zBN = web3BN.toBN(z.toHexString());
    const temp1 = zBN.mul(a).add(w);
    // const temp1 = z.mul(BigNumber.from(voter.a)).add(BigNumber.from(voter.w));
    const Zdash = EC.keyFromPrivate(temp1.toString(16));

    return {
      Zdash: {
        x: Zdash.getPublic().getX().toString(16),
        y: Zdash.getPublic().getY().toString(16),
      },
      u1: "0x" + u1.toString(16),
      u2: "0x" + u2.toString(16),
    };
  },
);

export const validateBlindSignature = createAsyncThunk(
  "voter/validateBlindSignature",
  async (args: number, { getState }) => {
    const EC = new ec("secp256k1");
    const { voter } = getState() as RootState;

    const Zdash = EC.keyFromPublic({ x: String(voter.Zdash?.x), y: String(voter.Zdash?.y) });
    const K = EC.keyFromPublic({ x: String(voter.K?.x), y: String(voter.K?.y) });
    const M = EC.keyFromPublic({ x: String(voter.M?.x), y: String(voter.M?.y) });
    const P = EC.keyFromPublic({ x: String(voter.P?.x), y: String(voter.P?.y) });

    const u1 = web3BN.toBN(String(voter.u1));

    try {
      await blindVoting.castVote(
        Zdash.getPublic().getX().toString(10),
        Zdash.getPublic().getY().toString(10),
        K.getPublic().getX().toString(10),
        K.getPublic().getY().toString(10),
        M.getPublic().getX().toString(10),
        M.getPublic().getY().toString(10),
        P.getPublic().getX().toString(10),
        P.getPublic().getY().toString(10),
        u1.toString(10),
        web3BN.toBN(args).toString(10),
      );
    } catch (error) {
      console.log(error);
    }
  },
);

export interface VoterInitState {
  a: string | null;
  b: string | null;
  w: string | null;
  M: { x: string; y: string } | null;
  K: { x: string; y: string } | null;
  P: { x: string; y: string } | null;
  Q: { x: string; y: string } | null;
  A: { x: string; y: string } | null;
  B: { x: string; y: string } | null;

  u1?: string | null;
  u2?: string | null;
  Zdash?: { x: string; y: string } | null;

  isVoterLoading: boolean;
}

const voterSlice = createSlice({
  name: "voter",
  initialState: {
    a: null,
    b: null,
    w: null,
    M: null,
    K: null,
    P: null,
    Q: null,
    A: null,
    B: null,
    u1: null,
    u2: null,
    Zdash: null,
    isVoterLoading: false,
  } as VoterInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewVoter.pending, (state, action) => {
        state.isVoterLoading = true;
      })
      .addCase(createNewVoter.fulfilled, (state, action) => {
        state.a = action.payload.a;
        state.b = action.payload.b;
        state.w = action.payload.w;
        state.A = action.payload.A;
        state.B = action.payload.B;
        state.K = action.payload.K;
        state.M = action.payload.M;
        state.P = action.payload.P;
        state.Q = action.payload.Q;
        state.isVoterLoading = false;
      })
      .addCase(requestBlindSignature.pending, (state, action) => {
        state.isVoterLoading = true;
      })
      .addCase(requestBlindSignature.fulfilled, (state, action) => {
        state.Zdash = action.payload.Zdash;
        state.u1 = action.payload.u1;
        state.u2 = action.payload.u2;
        state.isVoterLoading = false;
      })
      .addCase(validateBlindSignature.pending, (state, action) => {
        //
      })
      .addCase(validateBlindSignature.fulfilled, (state, action) => {
        state.isVoterLoading = false;
      });
  },
});

const { actions, reducer: voterReducer } = voterSlice;

export default voterReducer;
