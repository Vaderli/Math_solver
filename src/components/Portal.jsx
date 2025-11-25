import { createPortal } from "react-dom";

const modalRootEl = document.getElementById("modal");

export function Portal({ open, children }) 
{
  if (!open) 
    return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRootEl
  );
}
