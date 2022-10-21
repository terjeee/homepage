import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import css from "./Contact.module.scss";

export default function Contact() {
  const [isTyping, setIsTyping] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);

  const btnSendEnabled = emailValid && messageValid;

  useEffect(() => {
    setEmailValid(true);
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const timeoutEmail = setTimeout(() => {
      if (email.length > 0 && !regex.test(email)) return setEmailValid(false);
    }, 750);
    return () => clearTimeout(timeoutEmail); // return (in useEffect) = clean-up (før main func)
  }, [email]);

  useEffect(() => {
    setMessageValid(true);
    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 10 || message.length > 100))
        return setMessageValid(false);
    }, 750);
    return () => clearTimeout(timeoutMessage); // return (in useEffect) = clean-up
  }, [message]);

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
    //       setFormSuccess("Message Sent!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    // setFormError(`Error: ${error.text}`);
    //     }
    //   );

    alert("Sent");
  };

  return (
    <section className={css.page}>
      <div className={css.container}>
        <form className={css.form} onSubmit={sendEmail}>
          <label htmlFor="formEmail">Email</label>
          <input
            type="email"
            name="formEmail"
            id="formEmail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="formMsg">Message</label>
          <input
            type="text"
            name="formMsg"
            id="formMsg"
            onChange={(event) => setMessage(event.target.value)}
          />
          <button>Send</button>
          {!emailValid && <p>Please enter a valid email.</p>}
          {!messageValid && <p>Message needs to be between 10-250 characters.</p>}
        </form>
      </div>
    </section>
  );
}
