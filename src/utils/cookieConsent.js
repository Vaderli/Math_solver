export const CONSENT_STORAGE_KEY = "math_solver_cookie_consent";

export const DEFAULT_SETTINGS = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

export const DEFAULT_RESULTS = {
  history: [],
};

export function getConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function canSavePreferences() {
  const consent = getConsent();
  return consent?.preferences === true;
}

export function clearOptionalStoredData() {
  localStorage.removeItem("settings");
  localStorage.removeItem("results");
  localStorage.removeItem("quizSettings");
}

export function canSaveResults() {
  return canSavePreferences();
}
