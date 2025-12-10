import { useUserGuard } from "../../hooks/useUserGuard";
import styles from "./ResultTable.module.css";
import { useSelector } from "react-redux";

function ResultTable() {
  const userId = useUserGuard();

  const results = useSelector((state) => state.results);
  const list = results.allIds.map((id) => results.byId[id]);

  return (
    <div className={styles.wrapper}>
      <h2>Your Test Results</h2>

      {list.length === 0 ? (
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
            {list.map((r, i) => (
              <tr key={r.id}>
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
