import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";
import Result from "./pages/Result";
import SettingsPage from "./pages/SettingsPage";
import { Modal } from "./components/Modal";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [testKey, setTestKey] = useState(0);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("userId");
    if (saved) setUserId(saved);
  }, []);

  const onFinish = (finalScore) => {
    setScore(finalScore);
    setShowModal(true);
  };

  const onRestart = () => {
    setScore(0);
    setTestKey((k) => k + 1);
    setShowModal(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/user/:id/settings" element={<SettingsPage />} />
        <Route path="/user/:id/test" element={!showModal && <TestPage onFinish={onFinish} key={testKey} />} />
      </Routes>

      <Modal open={showModal} onClose={onCloseModal}>
        <Result score={score} onRestart={onRestart} />
      </Modal>
      </>
  );
}

export default App;
