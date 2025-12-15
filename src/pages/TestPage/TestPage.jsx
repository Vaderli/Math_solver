import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import TimerComponent from "../../components/TimerComponent/TimerComponent";
import { useQuiz } from "../../hooks/useQuiz";
import Result from "../Result/Result";
import styles from "./TestPage.module.css";
import { useNavigate } from "react-router-dom";
import { useUserGuard } from "../../hooks/useUserGuard";
import { useDispatch, useSelector } from "react-redux";
import { addResult } from "../../store/resultsSlice";

function TestPage() {
  useUserGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const settings = useSelector(state => state.settings);

  const [testKey, setTestKey] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onFinish = (finalScore, total) => {
    dispatch(addResult({
      score: finalScore,
      total,
      date: new Date().toISOString(),
    }));
    setShowModal(true);
  };

  const {
    question,
    score,
    setScore,
    currentIndex,
    total,
    doAnswer,
    finishQuiz,
  } = useQuiz({
    settings,
    onFinish,
    testKey,
  });

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
        <h2>
          Question {currentIndex + 1} / {total}
        </h2>

        <TimerComponent
          allTime={settings.time}
          onTimeOver={finishQuiz}
          isTick  = {showModal}
          key = {testKey}
        />

        <p>
          Score: <b>{score}</b>
        </p>

        {question && (
          <QuizBoard question={question} onAnswer={doAnswer} />
        )}

        <button className={styles.btnExit} onClick={finishQuiz}>
          Exit
        </button>
      </div>

      <Modal open={showModal} onClose={onCloseModal}>
        <Result score={score} onRestart={onRestart} />
      </Modal>
    </>
  );
}

export default TestPage;
