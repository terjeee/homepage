import css from "./Modal.module.scss";

function Modal({ closeModal, children }) {
  return (
    <div className={css.background}>
      <div className={css.modal}>
        <header>
          <button onClick={closeModal}>x</button>
        </header>
        {children}
      </div>
    </div>
  );
}

export default Modal;
