import styles from "../pages/TestPage/TestPage.module.css";

function QuizBoard({ question, onAnswer }) 
{
  return (
    <div className={styles.quizBoard}>
      <h3>{question.question}</h3>

      <ul className={styles.quizOptions}>
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