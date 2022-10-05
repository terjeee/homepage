import { GithubRepo } from "../../../../../assets/icons/index";
import css from "./ProjectSingle.module.scss";

export default function ProjectSingle(props) {
  return (
    <li className={css.project}>
      <div className={css.title}>
        <GithubRepo />
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title}
        </a>
        <span className={css.label}>Public</span>
      </div>
      <div>
        <span className={css.dot}></span>
        <p className={css.text}>{props.text}</p>
      </div>
    </li>
  );
}
