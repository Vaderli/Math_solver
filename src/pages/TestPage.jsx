import QuizBoard from "../components/QuizBoard";
import TimerComponent from "../components/TimerComponent";
import { useQuiz } from "../hooks/useQuiz";
import { useSettings } from "../hooks/useSettings";

function TestPage({ onFinish }) {
  const { settings } = useSettings();
  const { question, score, currentIndex, total, doAnswer, finishQuiz } = useQuiz({ settings, onFinish });
  const handleTimeOver = () => finishQuiz();

  return (
    <div className="test-page">
      <div className="test-header">
        <h2>Question {currentIndex + 1} / {total}</h2>
        <TimerComponent allTime={60} onTimeOver={handleTimeOver} />
        <p>Score: <b>{score}</b></p>
      </div>

      {
        question && <QuizBoard question={question} onAnswer={doAnswer} />
      }

      <button className="btn-exit" onClick={finishQuiz}>Exit</button>
    </div>
  );
}

export default TestPage;
