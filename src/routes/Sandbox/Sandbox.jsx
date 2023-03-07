import { useState } from "react";
import Modal from "../../components/Modal";
import css from "./Sandbox.module.scss";

export default function Sandbox() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <section className={css.sandbox}>
      <div className={css.container}>
        <button onClick={() => setShowModal(true)}>MODAL</button>
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
      </div>
    </section>
  );
}
