import { IconRepository, IconDots } from "../../../../../assets/icons/index";
import css from "./ProjectSingle.module.scss";

export default function ProjectSingle(props) {
  return (
    <li className={css.project}>
      <div className={css.title}>
        <div>
          <a href={props.linkRepo} target="_blank" rel="noreferrer" className={css.linkRepo}>
            <IconRepository />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer" className={css.link}>
            {props.title}
          </a>
          <span className={css.label}>Public</span>
        </div>
        <div className={css.dots}>
          <IconDots />
        </div>
      </div>
      <div>
        <span className={css.dot} style={{ backgroundColor: props.colorDot }}></span>
        <p className={css.text}>{props.text}</p>
      </div>
    </li>
  );
}
