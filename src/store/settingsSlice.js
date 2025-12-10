import { createSlice } from "@reduxjs/toolkit";

const savedSettings = localStorage.getItem("quizSettings");

const initialState = savedSettings
  ? JSON.parse(savedSettings)
  : {
      difficulty: "easy",
      count: 5,
      time: 60,
    };

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    updateSettings: (state, action) => {
      const newState = { ...state, ...action.payload };

      localStorage.setItem("quizSettings", JSON.stringify(newState));

      return newState;
    }
  }
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
