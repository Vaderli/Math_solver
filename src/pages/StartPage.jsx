function StartPage({onStart})
{
    return (
        <>
        <h1>Math Solver</h1>
      <div className="card">
        <p>
          Show your power in Math
        </p>
        <button className = "btn-start" onClick={onStart}>
            Start
        </button>
      </div>
      </>
    );
}

export default StartPage;