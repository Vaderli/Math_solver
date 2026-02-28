import { useLocalStorage } from "./useLocalStorage";

const DEFAULT_SET = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

/**
 * Custom hook for managing quiz settings
 * using localStorage persistence.
 *
 * @returns {Object}
 * @returns {Object} returns.settings - Current settings
 * @returns {Function} returns.updateSettings - Update settings
 */
export function useSettings() 
{
  const [settings, setSettings] = useLocalStorage(
    "quizSettings", DEFAULT_SET
  );

  /**
 * Updates quiz settings and saves them to localStorage.
 *
 * @param {Object} newSettings - New settings object
 */
  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return { settings, updateSettings };
}
