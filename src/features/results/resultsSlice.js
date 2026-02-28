import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

/**
 * Redux slice for storing quiz results history.
 *
 * State structure:
 * {
 *   history: Array<Object>
 * }
 *
 * Exports:
 * - addResult
 * - clearResults
 * - setResults
 * - reducer (default)
 */
const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
/**
 * Adds quiz result to history.
 *
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload - Result object
 */
    addResult(state, action) {
      state.history.push(action.payload);
    },
    /**
     * Clears all quiz results.
    */
    clearResults() {
      return initialState;
    },
    /**
     * Replaces results state with provided data.
     *
     * @param {Object} state
     * @param {Object} action
   */
    setResults(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { addResult, clearResults, setResults } = resultsSlice.actions;
export default resultsSlice.reducer;
