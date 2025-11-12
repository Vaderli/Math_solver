function Result({ score, onRestart }) {
  return (
    <div className="page">
      <h2>Results</h2>
      <p>Your score: <b>{score}</b></p>
      <button className="btn" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default Result;
