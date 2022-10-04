import css from "./ProjectSingle.module.scss";

export default function ProjectSingle(props) {
  return (
    <article className={css.project}>
      <img src={props.img} alt={props.imgAlt} />
      <div className={css.text}>
        <h2>{props.title} title</h2>
        <p>{props.text} text</p>
      </div>
    </article>
  );
}
