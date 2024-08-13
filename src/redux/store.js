import { configureStore } from '@reduxjs/toolkit';
import textInputReducer from './slices/textInputSlice';
import resultsReducer from './slices/resultsSlice'

export const store = configureStore({
  reducer: {
    textInput: textInputReducer,
    results: resultsReducer,

  },
});
