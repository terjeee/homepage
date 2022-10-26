import { useParams } from "react-router-dom";

import css from "./ContactFeedback.module.scss";

export default function ContactFeedback() {
  const { feedback: paramFeedback } = useParams();

  console.log(paramFeedback);
  return <div className={css.feedback}>{paramFeedback}</div>;
}
