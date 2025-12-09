import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.css";

export function Modal({ open, onClose, title, children }) 
{
  return (
    <Portal open={open} onClose={onClose}>
      <div className={styles.modalBox}>
        {title && <h3>{title}</h3>}
        <div className={styles.modalBody}>{children}</div>
        <button className={styles.btnClose} onClick={onClose}>Close</button>
      </div>
    </Portal>
  );
}
