import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {"easy"|"medium"|"hard"} Difficulty
 */

/**
 * @typedef {Object} SettingsState
 * @property {Difficulty} difficulty - Quiz difficulty level.
 * @property {number} count - Number of questions.
 * @property {number} time - Timer duration in seconds.
 */

/** @type {SettingsState} */
const initialState = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

/**
 * Redux slice responsible for managing quiz settings.
 *
 * @module settingsSlice
 */
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    /**
     * Sets quiz difficulty.
     *
     * @param {SettingsState} state
     * @param {{ payload: Difficulty }} action
     */
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },

    /**
     * Sets quiz timer duration.
     *
     * @param {SettingsState} state
     * @param {{ payload: number }} action
     */
    setTime(state, action) {
      state.time = action.payload;
    },

    /**
     * Updates multiple settings at once.
     *
     * @param {SettingsState} state
     * @param {{ payload: Partial<SettingsState> }} action
     * @returns {SettingsState}
     */
    setSettings(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { setDifficulty, setTime, setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;