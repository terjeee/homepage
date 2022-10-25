import { useParams } from "react-router-dom";

import css from "./ContactFeedback.module.scss";

export default function ContactSuccess() {
  const { feedback: paramFeedback } = useParams();

  console.log(paramFeedback);
  return <div>{paramFeedback}</div>;
}
