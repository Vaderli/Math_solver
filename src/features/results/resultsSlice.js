import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} QuizResult
 * @property {number} score - User score.
 * @property {number} total - Total questions count.
 * @property {Date|string} date - Date of quiz completion.
 */

/**
 * @typedef {Object} ResultsState
 * @property {QuizResult[]} history - Array of quiz results.
 */

/** @type {ResultsState} */
const initialState = {
  history: [],
};

/**
 * Redux slice responsible for storing quiz results history.
 *
 * @module resultsSlice
 */
const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    /**
     * Adds a quiz result to history.
     *
     * @param {ResultsState} state
     * @param {{ payload: QuizResult }} action
     */
    addResult(state, action) {
      state.history.push(action.payload);
    },

    /**
     * Clears all stored quiz results.
     *
     * @returns {ResultsState}
     */
    clearResults() {
      return initialState;
    },

    /**
     * Replaces results state with provided data.
     *
     * @param {ResultsState} state
     * @param {{ payload: Partial<ResultsState> }} action
     * @returns {ResultsState}
     */
    setResults(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { addResult, clearResults, setResults } = resultsSlice.actions;
export default resultsSlice.reducer;