import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import TestPage from './pages/TestPage';
import Result from './pages/Result';
import SettingsPage from './pages/SettingsPage';
import { Modal } from "./components/Modal";


function App() {
  const [page, setPage] = useState('StartPage');
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [testKey, setTestKey] = useState(0);


  const onStart = () => {
    setScore(0);
    setTestKey(prev => prev + 1);
    setPage("TestPage");
  };

  const onFinish = (finalScore) => {
    setScore(finalScore);
    setShowModal(true);
  };

  const onSettings = () => {
    setPage("SettingsPage");
  };

  const onRestart = () => {
    setScore(0);
    setTestKey(prev => prev + 1);
    setShowModal(false);
    setPage("TestPage");
  };

  const onBackSettings = () => {
    setPage("StartPage");
  };

  const onCloseModal = () => {
    setShowModal(false);
    setPage("StartPage");
  };

  return (
    <>
      {page === "StartPage" && <StartPage onStart={onStart} onSettings={onSettings} />}
      {page === "SettingsPage" && (<SettingsPage onBack={onBackSettings} />)}
      {page === "TestPage" && <TestPage onFinish={onFinish} key={testKey}   />}
      <Modal open={showModal} onClose={onCloseModal}>
        <Result score={score} onRestart={onRestart} />
      </Modal>
    </>
  );
}

export default App;
