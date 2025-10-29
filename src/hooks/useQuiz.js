import { useState, useEffect } from "react";
import dataTest from "../data/dataTest";

export function useQuiz(onFinish) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const question = dataTest[currentIndex];
  const total = dataTest.length;
  const isLast = currentIndex === total - 1;

  function doAnswer(selected) 
  {
    setScore((prev) => {
      const updated = selected === question.answer ? prev + 1 : prev;
      if (isLast && onFinish) 
      {
        onFinish(updated);
      }
      return updated;
    });

    if (!isLast) {
      setCurrentIndex((i) => i + 1);
    }
  }

  function finishQuiz() 
  {
    if (onFinish) 
      onFinish(score);
  }

  useEffect(() => {
    if (!question && onFinish) 
    {
      onFinish(score);
    }
  }, [question]);

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
