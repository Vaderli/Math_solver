import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import "./StartPage.css";
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
    <div className="start-wrapper">
      <h1 className="start-title">Math Solver</h1>
      <p className="start-subtitle">Show your power in Math</p>

      <div className="start-buttons">
        <button
          className="sticker-btn"
          onClick={() => navigate(`/game/${id}`)}
        >
          Start
        </button>

        <button
          className="sticker-btn settings-btn"
          onClick={() => navigate(`/settings/${id}`)}
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default StartPage;
