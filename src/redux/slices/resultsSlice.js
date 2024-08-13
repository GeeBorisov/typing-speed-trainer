import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wpm: 0,
  errors: 0,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setWpm: (state, action) => {
      state.wpm = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetResults: () => initialState,
  },
});

export const { setWpm, setErrors, resetResults } = resultsSlice.actions;
export default resultsSlice.reducer;
