import {
  DEFAULT_RESULTS,
  DEFAULT_SETTINGS,
  canSavePreferences,
  clearOptionalStoredData,
} from "./cookieConsent";

export function safeJsonParse(raw, fallback = null) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function loadSettings() {
  if (!canSavePreferences()) {
    return DEFAULT_SETTINGS;
  }

  const raw = localStorage.getItem("settings");
  return safeJsonParse(raw, DEFAULT_SETTINGS) ?? DEFAULT_SETTINGS;
}

export function loadResults() {
  if (!canSavePreferences()) {
    return DEFAULT_RESULTS;
  }

  const raw = localStorage.getItem("results");
  return safeJsonParse(raw, DEFAULT_RESULTS) ?? DEFAULT_RESULTS;
}

export function saveStatePartially(state) {
  if (!canSavePreferences()) {
    clearOptionalStoredData();
    return;
  }

  localStorage.setItem("settings", JSON.stringify(state.settings));
  localStorage.setItem("results", JSON.stringify(state.results));
}
