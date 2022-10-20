import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import css from "./Contact.module.scss";

export default function Contact() {
  const formData = useRef();
  const [formResponse, setFormResponse] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_contactForm",
    //     "template_70fzocf",
    //     formData.current,
    //     "6hbDSK_0uSjg0vdP5"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       setFormResponse("Message Sent!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setFormResponse("Something went wrong! Try again.");
    //     }
    //   );

    formData.current.reset();
  };

  return (
    <section className={css.page}>
      <div className={css.container}>
        <form className={css.form} ref={formData} onSubmit={sendEmail}>
          <label htmlFor="formName">Name</label>
          <input type="text" name="formName" id="formName" autoFocus />
          <label htmlFor="formEmail">Email</label>
          <input type="email" name="formEmail" id="formEmail" />
          <label htmlFor="formMsg">Message</label>
          <input type="text" name="formMsg" id="formMsg" />
          <button>Send</button>
        </form>
        {formResponse && <p>{formResponse}</p>}
      </div>
    </section>
  );
}
