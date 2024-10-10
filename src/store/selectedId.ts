import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface selectedIdState {
  id: null | number;
}

const initialState: selectedIdState = {
  id: null,
};

const selectedIdSlice = createSlice({
  name: 'selectAccount',
  initialState,
  reducers: {
    selectThisId: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    },
  },
});

export const { selectThisId } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
