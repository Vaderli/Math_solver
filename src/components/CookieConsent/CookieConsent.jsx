import { useState, useEffect } from "react";
import styles from "./CookieConsent.module.css";
import {
  clearOptionalStoredData,
  getConsent,
  saveConsent,
} from "../../utils/cookieConsent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    const savedConsent = getConsent();

    if (!savedConsent) {
      setVisible(true);
      return;
    }

    setPreferences(savedConsent.preferences === true);
  }, []);

  const applyConsent = (allowPreferences) => {
    saveConsent({
      necessary: true,
      preferences: allowPreferences,
      timestamp: new Date().toISOString(),
    });

    if (!allowPreferences) {
      clearOptionalStoredData();
    }

    setPreferences(allowPreferences);
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className={styles.modal}>
        <h2 id="cookie-title">Cookie preferences</h2>
        <p className={styles.description}>
          We use essential browser storage to run the test. Optional storage saves your quiz
          settings and results on this device. You can continue with essential storage only
          or allow optional preferences storage too.
        </p>

        <div className={styles.options}>
          <label className={styles.optionRow}>
            <input type="checkbox" checked disabled />
            <span>Necessary storage (required for application functionality)</span>
          </label>

          <label className={styles.optionRow}>
            <input
              type="checkbox"
              checked={preferences}
              onChange={() => setPreferences((current) => !current)}
            />
            <span>Preferences storage (save quiz settings and results)</span>
          </label>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => applyConsent(false)}
            className={styles.secondaryBtn}
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => applyConsent(preferences)}
            className={styles.acceptBtn}
          >
            Save my choice
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;