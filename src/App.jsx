import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import TestPage from './pages/TestPage';
import Result from './pages/Result';

function App() {
  const [page, setPage] = useState('StartPage');
  const [score, setScore] = useState(0);

  const onStart = () => {
    setScore(0);
    setPage("TestPage");
  };

  const onFinish = (finalScore) => {
    setScore(finalScore);
    setPage("ResultPage");
  };

  const onRestart = () => {
    setPage("StartPage");
  };

  return (
    <>
      {page === "StartPage" && <StartPage onStart={onStart} />}
      {page === "TestPage" && <TestPage onFinish={onFinish} />}
      {page === "ResultPage" && <Result score={score} onRestart={onRestart} />}
    </>
  );
}

export default App;
