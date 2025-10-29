function QuizBoard({ question, onAnswer }) {
  return (
    <div className="quiz-board">
      <h3>{question.question}</h3>

      <ul className="quiz-options">
        {question.options.map((option, i) => (
          <li key={i} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizBoard;