import { Portal } from "./Portal";

export function Modal({ open, onClose, title, children }) 
{
  return (
    <Portal open={open} onClose={onClose}>
      <div className="modal-box">
        {title && <h3>{title}</h3>}
        <div className="modal-body">{children}</div>
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    </Portal>
  );
}
