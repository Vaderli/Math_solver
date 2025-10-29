import QuizBoard from "../components/QuizBoard";
import TimerComponent from "../components/TimerComponent";
import { useQuiz } from "../hooks/useQuiz";

function TestPage({ onFinish }) {
  const { question, score, currentIndex, total, doAnswer, finishQuiz } = useQuiz(onFinish);

  return (
    <div className="test-page">
      <div className="test-header">
        <h2>Question {currentIndex + 1} / {total}</h2>
        <TimerComponent allTime={60} onTimeOver={finishQuiz} />
        <p>Score: <b>{score}</b></p>
      </div>

      {question && <QuizBoard question={question} onAnswer={doAnswer} />}

        <button className="btn-exit" onClick={finishQuiz}>Exit</button>
    </div>
  );
}

export default TestPage;
