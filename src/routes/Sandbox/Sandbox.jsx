import { useState } from "react";
import useScrollLock from "../../utils/hooks/useScrollLock";

import Modal from "../../components/Modal";
import css from "./Sandbox.module.scss";

export default function Sandbox() {
  const [showModal, setShowModal] = useState(false);
  const [toggleScollLock] = useScrollLock();

  const toggleModal = () => {
    setShowModal(!showModal);
    toggleScollLock();
  };

  return (
    <section className={css.sandbox}>
      <div className={css.container}>
        <button onClick={toggleModal}>MODAL</button>
        {showModal && (
          <Modal closeModal={toggleModal}>
            <h1>HEI</h1>
          </Modal>
        )}
      </div>
    </section>
  );
}
