import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDifficulty(state, action) 
    {
      state.difficulty = action.payload;
    },
    setTime(state, action) 
    {
      state.time = action.payload;
    },
    setSettings(state, action) 
    {
      return { ...state, ...(action.payload || {}) };
    },
  },
});

export const { setDifficulty, setTime, setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
