import { createSlice } from '@reduxjs/toolkit';
import { TEXT_ARRAY, getRandomText } from '../../assets/utils';

const initialState = {
  text: getRandomText(TEXT_ARRAY),
  textArray: TEXT_ARRAY,
  userInput: '',
  startTime: null,
  elapsedTime: 0,
  wpm: 0,
  errors: 0,
  showResults: false,
  timeLeft: 30,
};

const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setElapsedTime: (state, action) => {
      state.elapsedTime = action.payload;
    },
    setWpm: (state, action) => {
      state.wpm = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload;
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setText,
  setUserInput,
  setStartTime,
  setElapsedTime,
  setWpm,
  setErrors,
  setShowResults,
  setTimeLeft,
  resetState,
} = textInputSlice.actions;

export default textInputSlice.reducer;
