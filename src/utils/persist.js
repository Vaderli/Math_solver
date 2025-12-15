export function safeJsonParse(raw, fallback = null) {
  try 
  {
    return raw ? JSON.parse(raw) : fallback;
  } 
  catch {
    return fallback;
  }
}

export function loadSettings() {
  const fallback = { difficulty: "easy", count: 5, time: 60 };
  const raw = localStorage.getItem("settings");
  return safeJsonParse(raw, fallback) ?? fallback;
}

export function loadResults() {
  const fallback = { history: [] };
  const raw = localStorage.getItem("results");
  return safeJsonParse(raw, fallback) ?? fallback;
}

export function saveStatePartially(state) {
  localStorage.setItem("settings", JSON.stringify(state.settings));
  localStorage.setItem("results", JSON.stringify(state.results));
}
