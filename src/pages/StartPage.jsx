import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    let id = localStorage.getItem("userId");
    if (!id) 
    {
      id = uuid();
      useLocalStorage("userId", id);
    }
  }, []);

  const id = localStorage.getItem("userId");

  return (
    <>
      <h1>Math Solver</h1>
      <div className="card">
        <p>Show your power in Math</p>
        <button className="btn-start" onClick={() => navigate(`/user/${id}/test`)}>
          Start
        </button>
        <button className="btn-settings" onClick={() => navigate(`/user/${id}/settings`)}>
          Settings
        </button>
      </div>
    </>
  );
}

export default StartPage;
