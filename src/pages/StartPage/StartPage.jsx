import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import styles from "./StartPage.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function StartPage() {
  const navigate = useNavigate();
  const [id, setUserId] = useLocalStorage("userId", null);

  useEffect(() => {
    if (!id) 
    {
      const newId = uuid();
      setUserId(newId);
    }
  }, [id, setUserId]);

  return (
    <div className={styles.startWrapper}>
      <h1 className={styles.startTitle}>Math Solver</h1>
      <p className={styles.startSubtitle}>Show your power in Math</p>

      <div className={styles.startButtons}>
        <button
          className={styles.stickerBtn}
          onClick={() => navigate(`/game/${id}`)}
        >
          Start
        </button>

        <button
          className={`${styles.stickerBtn} ${styles.resBtn}`}
          onClick={() => navigate(`/results/${id}`)}
        >
          Results
        </button>

        <button
          className={`${styles.stickerBtn} ${styles.settingsBtn}`}
          onClick={() => navigate(`/settings/${id}`)}
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default StartPage;
