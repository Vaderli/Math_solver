import { useLocalStorage } from "./useLocalStorage";
import { DEFAULT_SETTINGS, canSavePreferences } from "../utils/cookieConsent";

/**
 * Custom hook for managing quiz settings
 * using localStorage persistence.
 *
 * @returns {Object}
 * @returns {Object} returns.settings - Current settings
 * @returns {Function} returns.updateSettings - Update settings
 */
export function useSettings() {
  const [settings, setSettings] = useLocalStorage("quizSettings", DEFAULT_SETTINGS);

  /**
   * Updates quiz settings and saves them to localStorage.
   *
   * @param {Object} newSettings - New settings object
   */
  const updateSettings = (newSettings) => {
    if (canSavePreferences()) {
      setSettings(newSettings);
      return;
    }

    setSettings(DEFAULT_SETTINGS);
  };

  return { settings, updateSettings };
}
