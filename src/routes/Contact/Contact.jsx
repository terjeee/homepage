import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import css from "./Contact.module.scss";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const formValid =
    email.length > 0 && regexEmail.test(email) && message.length > 10 && message.length < 250;

  useEffect(() => {
    setEmailValid(true);
    const timeoutEmail = setTimeout(() => {
      if (email.length > 0 && !regexEmail.test(email)) return setEmailValid(false);
    }, 750);
    return () => clearTimeout(timeoutEmail); // return (i useEffect) = clean-up
  }, [email]);

  useEffect(() => {
    setMessageValid(true);
    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 10 || message.length > 100))
        return setMessageValid(false);
    }, 750);
    return () => clearTimeout(timeoutMessage); // return (i useEffect) = clean-up
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
          <div>
            <label htmlFor="formEmail">Email</label>
            <input
              type="email"
              name="formEmail"
              id="formEmail"
              onChange={(event) => setEmail(event.target.value)}
            />
            {!emailValid && <p>Please enter a valid email.</p>}
          </div>
          <div>
            <label htmlFor="formMsg">Message</label>
            <input
              type="text"
              name="formMsg"
              id="formMsg"
              onChange={(event) => setMessage(event.target.value)}
            />
            {!messageValid && <p>Message needs to be between 10-250 characters.</p>}
          </div>
          <button disabled={!formValid}>Send</button>
        </form>
      </div>
    </section>
  );
}
