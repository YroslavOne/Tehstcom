import accountSlice from "./accounts";
import { configureStore } from "@reduxjs/toolkit";
import  paymentsSlice  from "./payment";
import selectedIdSlice from './selectedId'

export const store = configureStore({
  reducer: {
    account: accountSlice,
    payments: paymentsSlice,
    selectedId: selectedIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
