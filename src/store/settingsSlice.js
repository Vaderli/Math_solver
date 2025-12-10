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
    updateSettings(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
