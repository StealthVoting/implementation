import { AsyncThunkOptions, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ec } from "elliptic";
import { BigNumber } from "ethers";
import sha1 from "js-sha1";
import * as web3BN from "web3-utils";

import { AppDispatch, RootState } from "../store";
import { blindVoting } from "../utils/ethers";
import { randNum } from "../utils/functions";

export const createNewVoter = createAsyncThunk("voter/createNewVoter", async () => {
  const EC = new ec("secp256k1");

  const a = randNum();
  const b = randNum();
  const w = randNum();

  const A = EC.keyFromPrivate(a.toHexString());
  const B = EC.keyFromPrivate(b.toHexString());
  const K = EC.keyFromPrivate(w.toHexString());

  const Y = await blindVoting.getY();
  const H = await blindVoting.getH();

  const Ypoint = EC.keyFromPublic({ x: Y.x.toHexString(), y: Y.y.toHexString() });
  const Hpoint = EC.keyFromPublic({ x: H.x.toHexString(), y: H.y.toHexString() });

  const P = Ypoint.getPublic().mul(web3BN.toBN(a.toHexString()));
  const Q = Ypoint.getPublic().mul(web3BN.toBN(b.toHexString()));

  const HQ = Q.add(Hpoint.getPublic());
  const M = HQ.mul(web3BN.toBN(a.toHexString()));

  return {
    a: a.toHexString(),
    b: b.toHexString(),
    w: w.toHexString(),
    A: { x: A.getPublic().getX().toString("hex"), y: A.getPublic().getY().toString("hex") },
    B: { x: B.getPublic().getX().toString("hex"), y: B.getPublic().getY().toString("hex") },
    K: { x: K.getPublic().getX().toString("hex"), y: K.getPublic().getY().toString("hex") },
    P: { x: P.getX().toString("hex"), y: P.getY().toString("hex") },
    Q: { x: Q.getX().toString("hex"), y: Q.getY().toString("hex") },
    M: { x: M.getX().toString("hex"), y: M.getY().toString("hex") },
  } as VoterInitState;
});

export const requestBlindSignature = createAsyncThunk(
  "voter/requestBlindSignature",
  async (args: number, { getState }) => {
    const EC = new ec("secp256k1");

    const { voter } = getState() as RootState;

    const hasher = sha1.create();
    hasher.update(String(voter.a));
    hasher.update(String(voter.A?.x));
    hasher.update(String(voter.A?.y));

    hasher.update(String(voter.b));
    hasher.update(String(voter.B?.x));
    hasher.update(String(voter.B?.y));

    hasher.update(String(args));

    const u1 = "0x" + hasher.hex();
    // console.log(u1);

    const u2 = BigNumber.from(u1).add(BigNumber.from(voter.b)).toHexString();

    const z = await blindVoting.requestBlindSign(u2);

    const temp1 = z.mul(BigNumber.from(voter.a)).add(BigNumber.from(voter.w));
    const Zdash = EC.keyFromPrivate(temp1.toHexString());

    return {
      Zdash: {
        x: Zdash.getPublic().getX().toString(16),
        y: Zdash.getPublic().getY().toString(16),
      },
      u1,
      u2,
    };
  },
);

// export const validateBlindSignature = createAsyncThunk("voter/validateBlindSignature", async () => {

// });

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

  isLoading: boolean;
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
    isLoading: false,
  } as VoterInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewVoter.pending, (state, action) => {
        state.isLoading = true;
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
        state.isLoading = false;
      })
      .addCase(requestBlindSignature.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(requestBlindSignature.fulfilled, (state, action) => {
        state.Zdash = action.payload.Zdash;
        state.u1 = action.payload.u1;
        state.u2 = action.payload.u2;
        state.isLoading = false;
      });
  },
});

const { actions, reducer: voterReducer } = voterSlice;

export default voterReducer;
