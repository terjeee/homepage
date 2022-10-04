import ProjectSingle from "./components/ProjectSingle";
import css from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={css.projects}>
      <div className={css.container}>
        <ProjectSingle />
      </div>
    </section>
  );
}
