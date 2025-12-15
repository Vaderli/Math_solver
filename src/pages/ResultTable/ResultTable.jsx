import styles from "./ResultTable.module.css";
import { useSelector } from "react-redux";

function ResultTable() {
  const results = useSelector((state) => state.results.history);

  return (
    <div className={styles.wrapper}>
      <h2>Your Test Results</h2>

      {results.length === 0 ? (
        <p>No test attempts yet</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Score</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r, i) => (
              <tr key={r.date}>
                <td>{i + 1}</td>
                <td>{r.score}</td>
                <td>{r.total}</td>
                <td>{new Date(r.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResultTable;
