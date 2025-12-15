import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import resultsReducer from "./resultsSlice";
import { loadSettings, loadResults, saveStatePartially } from "../utils/persist";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    results: resultsReducer,
  },
  preloadedState: {
    settings: loadSettings(),
    results: loadResults(),
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveStatePartially(state);
});
