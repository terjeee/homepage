import ReactDOM from "react-dom";

import css from "./Modal.module.scss";

function Modal({ closeModal, children }) {
  return ReactDOM.createPortal(
    <div className={css.background} onClick={closeModal}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("root-modal")
  );
}

export default Modal;
