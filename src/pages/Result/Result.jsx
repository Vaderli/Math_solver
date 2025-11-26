import styles from "./Result.module.css";

function Result({ score, onRestart }) {
  return (
    <div className={styles.resultWrapper}>
      {/* <div className="stickerWrapper">
        <img src={sticker} alt="sticker" className={styles.sticker}/>
      </div> */}

      <h2 className={styles.title}>Results</h2>
      <p className = {styles.score}>Your score: <b>{score}</b></p>
      <button className={styles.btnRestart} onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default Result;
