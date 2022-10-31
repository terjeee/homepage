import { PROJECTS } from "../../../../assets/PROJECTS";

import ProjectSingle from "./components/ProjectSingle";
import css from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={css.projects} id="projects">
      <ul className={css.list}>
        {PROJECTS.map((el) => (
          <ProjectSingle
            key={el.id}
            title={el.title}
            text={el.text}
            link={el.link}
            linkRepo={el.linkRepo}
            colorDot={el.colorDot}
          />
        ))}
      </ul>
    </section>
  );
}
