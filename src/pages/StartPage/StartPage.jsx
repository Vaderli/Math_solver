import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import "./StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let id = localStorage.getItem("userId");
    if (!id) 
    {
      id = uuid();
      localStorage.setItem("userId", id);
    }
  }, []);

  const id = localStorage.getItem("userId");

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
