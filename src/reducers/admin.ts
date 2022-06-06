import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BigNumber } from "ethers";

import { blindVotingAdmin } from "../utils/ethers";

export type Party = {
  partyName: string;
  partyCode: string;
};

export interface AdminInitState {
  currPartyVotes: number;
  parties: Party[];
  isAdminLoading: boolean;
}

export const addNewParty = createAsyncThunk("admin/addNewParty", async (args: Party) => {
  const data = JSON.stringify({
    code: args.partyCode,
    name: args.partyName,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: data,
  };

  let txn;

  try {
    fetch("/party", requestOptions).then(response => console.log(response));

    txn = await blindVotingAdmin.addParty(args.partyCode, args.partyName);
  } catch (error) {
    console.log(error);
  }

  console.log(txn);

  return { partyName: args.partyName, partyCode: args.partyCode } as Party;
});

export const getVotesForPartyCode = createAsyncThunk("admin/getVotesForPartyCode", async (args: number) => {
  let votes: BigNumber = BigNumber.from(0);

  try {
    votes = await blindVotingAdmin.getVotesForPartyCode(args);
  } catch (error) {
    console.log(error);
  }

  return votes.toNumber();
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    currPartyVotes: 0,
    parties: [],
    isAdminLoading: false,
  } as AdminInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addNewParty.pending, (state, action) => {
        state.isAdminLoading = true;
      })
      .addCase(addNewParty.fulfilled, (state, action) => {
        state.parties.push(action.payload);
        state.isAdminLoading = false;
      })
      .addCase(getVotesForPartyCode.pending, (state, action) => {
        state.isAdminLoading = true;
      })
      .addCase(getVotesForPartyCode.fulfilled, (state, action) => {
        state.currPartyVotes = action.payload;
        state.isAdminLoading = false;
      });
  },
});

const { actions, reducer: adminReducer } = adminSlice;

export default adminReducer;
