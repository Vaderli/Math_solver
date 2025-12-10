import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import TimerComponent from "../../components/TimerComponent/TimerComponent";
import { useQuiz } from "../../hooks/useQuiz";
import { useSettings } from "../../hooks/useSettings";
import Result from "../Result/Result";
import styles from "./TestPage.module.css";
import { useNavigate } from "react-router-dom";
import { useUserGuard } from "../../hooks/useUserGuard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { addResult } from "../../store/resultsSlice";
import { useDispatch } from "react-redux";


function TestPage() {

  const userId = useUserGuard();

  const dispatch = useDispatch();
  const resultsKey = `results_${userId}`;
  const [results, setResults] = useLocalStorage(resultsKey, []);

  const onFinish = (finalScore) => {
    setScore(finalScore);
    dispatch(addResult({ score: finalScore, total }));
    // saveResult(finalScore); // ?????????????????????????????????/
    setShowModal(true);
  };

  const saveResult = (finalScore) => {
  const newResult = {
    score: finalScore,
    total,
    date: new Date().toISOString(),
  };

  setResults((prev) => {
    const updated = [newResult, ...prev];
    if (updated.length > 4) 
    {
      updated.pop();
    }
    return updated;
    });
  };



  const { settings } = useSettings();
  const [testKey, setTestKey] = useState(0);
  const { question, score, setScore, currentIndex, total, doAnswer, finishQuiz } =
    useQuiz({ settings, onFinish, testKey });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const onRestart = () => {
    setScore(0);
    setTestKey(prev => prev + 1);
    setShowModal(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
    navigate("/start");
  };

  return (
    <>
    <div className={styles.testPage}>
      <h2>Question {currentIndex + 1} / {total}</h2>

      <TimerComponent
        allTime={settings.time}
        onTimeOver={finishQuiz}
        isTick = {showModal}
        key = {testKey}
      />

      <p>Score: <b>{score}</b></p>

      {question && (
        <QuizBoard question={question} onAnswer={doAnswer} />
      )}

      <button className={styles.btnExit} onClick={finishQuiz}>Exit</button>
    </div>
    <Modal open={showModal} onClose={onCloseModal}>
      <Result score={score} onRestart={onRestart} />
    </Modal>
      </>
  );
}

export default TestPage;
