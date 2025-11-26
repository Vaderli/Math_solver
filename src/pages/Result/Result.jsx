import "./Result.css";

function Result({ score, onRestart }) {
  return (
    <div className="resultWrapper">
      {/* <div className="stickerWrapper">
        <img src={sticker} alt="sticker" className={styles.sticker}/>
      </div> */}

      <h2 className="title">Results</h2>
      <p className = "score">Your score: <b>{score}</b></p>
      <button className="btnRestart" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default Result;
