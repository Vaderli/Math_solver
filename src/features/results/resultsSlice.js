import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResult(state, action) {
      state.history.push(action.payload);
    },
    clearResults() {
      return initialState;
    },
    setResults(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { addResult, clearResults, setResults } = resultsSlice.actions;
export default resultsSlice.reducer;
