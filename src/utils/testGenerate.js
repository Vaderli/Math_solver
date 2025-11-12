const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function testGenerate(difficulty = "easy", count = 5) {
  const questions = [];

  for (let i = 0; i < count; i++) 
  {
    let question = "";
    let answer = 0;
    let options = [];

    if (difficulty === "easy") 
    {
      const a = rand(1, 20);
      const b = rand(1, 20);
      const op = Math.random() > 0.5 ? "+" : "-";
      answer = op === "+" ? a + b : a - b;
      question = `${a} ${op} ${b} = `;
    }

    else if (difficulty === "medium") 
    {
      const a = rand(2, 10);
      let b = rand(2, 10);
      const op = Math.random() > 0.5 ? "*" : "/";

      if (op === "/") 
      {
        while (b === 0) 
          b = rand(1, 10);
        const product = a * b;
        answer = a;
        question = `${product} / ${b} = `;
      } 
      else 
      {
        answer = a * b;
        question = `${a} * ${b} = `;
      }
    }

    else if (difficulty === "hard") {
      const a = rand(2, 10);
      let b = rand(1, 10);
      const c = rand(1, 10);
      const firstOp = Math.random() > 0.5 ? "*" : "/";
      const secondOp = Math.random() > 0.5 ? "+" : "-";

      if (firstOp === "/") 
      {
        while (b === 0)
          b = rand(1, 10);
      }

      const firstPart = firstOp === "*" ? (a * b) : Math.floor(a / b);
      answer = secondOp === "+" ? (firstPart + c) : (firstPart - c);
      question = `${a} ${firstOp} ${b} ${secondOp} ${c} = `;
    }

    options = shuffleOptions(answer);
    questions.push({ id: i + 1, question, options, answer });
  }

  return questions;
}

function shuffleOptions(correct) 
{
  const options = new Set([correct]);
  while (options.size < 3) 
  {
    const offset = rand(-10, 10);
    if (offset !== 0) 
      options.add(correct + offset);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}
