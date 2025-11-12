import { useState, useEffect } from "react";
import { testGenerate } from "../utils/testGenerate";

export function useQuiz({ settings, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (settings) 
    {
      const generated = testGenerate(settings.difficulty, settings.count);
      setQuestions(generated);
      setCurrentIndex(0);
      setScore(0);
    }
  }, [settings]);

  const total = questions.length;
  const question = total > 0 ? questions[currentIndex] : null;
  const isLast = currentIndex === total - 1;

  function doAnswer(selected) 
  {
    if (!question) 
      return;

    const correct = selected === question.answer;
    const newScore = score + (correct ? 1 : 0);
    setScore(newScore);

    if (isLast) 
    {
      if (onFinish) 
        onFinish(newScore);
    } 
    else 
      {
      setCurrentIndex((i) => i + 1);
    }
  }

  function finishQuiz() 
  {
    if (onFinish) 
      onFinish(score);
  }

  return {
    question,
    score,
    currentIndex,
    total,
    isLast,
    doAnswer,
    finishQuiz,
  };
}
