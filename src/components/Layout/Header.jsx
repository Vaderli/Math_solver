import { useEffect } from "react";
import {Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./Header.module.css";

function Header() {
    const [userId, setUserId] = useLocalStorage("userId", null);
    const navigate = useNavigate();

    useEffect(() => {
    if (!userId) 
    {
      navigate("/start")
    }
    }, []);

  return (
    <>
    <header className="header">
      <h1>MathSolver</h1>
    </header>
    <Outlet/>
    </>
  );
};

export default Header;