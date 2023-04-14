import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

import css from "./Contact.module.scss";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Contact() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const cssEmail = !emailValid ? "invalid" : "";

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(null);
  const cssMessage = !messageValid ? "invalid" : "";

  const formData = useRef();
  const formValid = email.length > 0 && regexEmail.test(email) && message.length > 5 && message.length < 250;
  const cssButton = !formValid ? "invalid" : "";

  useEffect(() => {
    setEmailValid(true);
    const timeoutEmail = setTimeout(() => {
      if (email.length > 0 && !regexEmail.test(email)) return setEmailValid(false);
    }, 750);
    return () => clearTimeout(timeoutEmail); // return (i useEffect) = clean-up før main code
  }, [email]);

  useEffect(() => {
    setMessageValid(true);
    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 5 || message.length > 100)) return setMessageValid(false);
    }, 750);
    return () => clearTimeout(timeoutMessage); // return (i useEffect) = clean-up før main code
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_contactForm", "template_70fzocf", formData.current, "6hbDSK_0uSjg0vdP5").then(
      (result) => {
        console.log(result);
        navigate("/homepage/contact-success");
      },
      (error) => {
        console.log(error);
        navigate("/homepage/contact-error");
      }
    );
  };

  return (
    <div className={css.container}>
      <h1>CONTACT</h1>
      <form className={css.contactForm} onSubmit={sendEmail} ref={formData}>
        <div className={css.formControl}>
          {/* <label htmlFor="formEmail">Email</label> */}
          <input
            className={css[cssEmail]}
            type="email"
            placeholder="Email"
            name="formEmail"
            id="formEmail"
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          {!emailValid && <p className={css.invalidMsg}>Please enter a valid email.</p>}
        </div>
        <div className={css.formControl}>
          {/* <label htmlFor="formMsg">Message</label> */}
          <textarea
            className={css[cssMessage]}
            name="formMsg"
            placeholder="Message"
            id="formMsg"
            onChange={(event) => setMessage(event.target.value)}
          />
          {!messageValid && <p className={css.invalidMsg}>Message needs to be 5-250 characters.</p>}
        </div>
        <button className={`${css.btnSendEmail} ${css[cssButton]}`} disabled={!formValid}>
          SEND
        </button>
      </form>
    </div>
  );
}
