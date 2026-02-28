import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

/**
 * Redux slice for managing quiz settings.
 *
 * State structure:
 * {
 *   difficulty: "easy" | "medium" | "hard",
 *   count: number,
 *   time: number
 * }
 *
 * Exports:
 * - setDifficulty
 * - setTime
 * - setSettings
 * - reducer (default)
 */
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    /**
     * Sets quiz difficulty.
     *
     * @param {Object} state
     * @param {Object} action
     * @param {"easy"|"medium"|"hard"} action.payload
     */
    setDifficulty(state, action) 
    {
      state.difficulty = action.payload;
    },
    /**
     * Sets quiz timer duration.
     *
     * @param {Object} state
     * @param {Object} action
     * @param {number} action.payload
     */
    setTime(state, action) 
    {
      state.time = action.payload;
    },
    /**
     * Updates multiple settings at once.
     *
     * @param {Object} state
     * @param {Object} action
     */
    setSettings(state, action) 
    {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { setDifficulty, setTime, setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
