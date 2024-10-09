import axios from "axios";
import { PREFIX } from "../helpers/API";
import { RootState } from "./store";
import { Account } from "../interface/account.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AccountsState {
  accounts: Account[];
  accountsErrorMessage?: string;
}

const initialState: AccountsState = {
  accounts: [],
  accountsErrorMessage: undefined,
};

export const getAccounts = createAsyncThunk<
  Account[],
  void,
  { state: RootState }
>("accounts/getAccounts", async () => {
  const { data } = await axios.get<Account[]>(`${PREFIX}`, {});
  return data;
});

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearTaskError: (state) => {
      state.accountsErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.pending, (state) => {
        state.accountsErrorMessage = undefined;
      })
      .addCase(
        getAccounts.fulfilled,
        (state, action: PayloadAction<Account[]>) => {
          state.accounts = action.payload;
        }
      )
      .addCase(getAccounts.rejected, (state, action) => {
        state.accountsErrorMessage =
          action.error.message || "Ошибка при загрузке аккаунтов";
      });
  },
});

export default accountSlice.reducer;
export const accountActions = accountSlice.actions;
