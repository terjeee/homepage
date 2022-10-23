import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

import css from "./Contact.module.scss";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Contact() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);

  const formData = useRef();
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

    emailjs
      .sendForm(
        "service_contactForm",
        "template_70fzocf",
        formData.current,
        "6hbDSK_0uSjg0vdP5"
      )
      .then(
        (result) => {
          console.log(result.text);
          return navigate("/contact-success");
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Sent");
  };

  return (
    <div className={css.container}>
      <h1>CONTACT</h1>
      <form className={css.contactForm} onSubmit={sendEmail} ref={formData}>
        <div className={css.formControl}>
          {/* <label htmlFor="formEmail">Email</label> */}
          <input
            type="email"
            placeholder="Email"
            name="formEmail"
            id="formEmail"
            onChange={(event) => setEmail(event.target.value)}
          />
          {!emailValid && <p className={css.invalidMsg}>Please enter a valid email.</p>}
        </div>
        <div className={css.formControl}>
          {/* <label htmlFor="formMsg">Message</label> */}
          <textarea
            name="formMsg"
            placeholder="Message"
            id="formMsg"
            onChange={(event) => setMessage(event.target.value)}
          />
          {!messageValid && (
            <p className={css.invalidMsg}>Message needs to be between 10-250 characters.</p>
          )}
        </div>
        <button className={css.btnSendEmail} disabled={!formValid}>
          SEND
        </button>
      </form>
    </div>
  );
}
