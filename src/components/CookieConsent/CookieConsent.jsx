import { useState, useEffect } from "react";
import styles from "./CookieConsent.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const STORAGE_KEY = "math_solver_cookie_consent";

const CookieConsent = () => {
  const [consent, setConsent] = useLocalStorage(STORAGE_KEY, null);
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    if (!consent) {
      setVisible(true);
    }
  }, [consent]);

  const handleAccept = () => {
    const consentData = {
      necessary: true,
      preferences,
      timestamp: new Date().toISOString(),
    };

    setConsent(consentData);
    setVisible(false);
  };

  if (!visible) 
    return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Cookie Settings</h2>
        <p>
          This application uses browser storage to save quiz settings,
          results, and improve user experience in compliance with GDPR.
        </p>

        <div className={styles.options}>
          <label>
            <input type="checkbox" checked disabled />
            Necessary storage (required for application functionality)
          </label>

          <label>
            <input
              type="checkbox"
              checked={preferences}
              onChange={() => setPreferences(!preferences)}
            />
            Preferences storage (quiz settings & results)
          </label>
        </div>

        <button
          onClick={handleAccept}
          className={styles.acceptBtn}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;