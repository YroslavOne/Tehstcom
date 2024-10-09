import axios from "axios";
import { PREFIX_PAYMENT } from "../helpers/API";
import { RootState } from "./store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payment } from "../interface/payment.interface";

export interface PaymentState {
  elements: Payment[];
  paymentsErrorMessage?: string;
}

const initialState: PaymentState = {
  elements: [],
  paymentsErrorMessage: undefined,
};

export const getPayments = createAsyncThunk<PaymentState, number, { state: RootState }>(
  "payments/getPayment",
  async (id) => {
    const { data } = await axios.get<PaymentState>(`${PREFIX_PAYMENT}`, {
      params: {
        pass: "15981605",
        id: id,
      },
    });

    return data;
  }
);


export const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    clearTaskError: (state) => {
      state.paymentsErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayments.pending, (state) => {
        state.paymentsErrorMessage = undefined;
      })
      .addCase(
        getPayments.fulfilled,
        (state, action: PayloadAction<PaymentState>) => {
          state.elements = action.payload.elements;
        }
      )
      .addCase(getPayments.rejected, (state, action) => {
        state.paymentsErrorMessage =
          action.error.message || "Ошибка при загрузке аккаунтов";
      });
  },
});

export default paymentsSlice.reducer;
export const paymentsActions = paymentsSlice.actions;
