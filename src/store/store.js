import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settings/settingsSlice";
import resultsReducer from "../features/results/resultsSlice";
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

window.addEventListener("cookie-consent-updated", () => {
  saveStatePartially(store.getState());
});
