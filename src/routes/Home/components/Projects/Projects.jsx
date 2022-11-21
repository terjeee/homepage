import { PROJECTS } from "../../../../assets/PROJECTS";

import ProjectSingle from "./components/ProjectSingle";
import css from "./Projects.module.scss";

export default function Projects() {
  const projects = [...PROJECTS];

  return (
    <section className={css.projects} id="projects">
      <ul className={css.list}>
        {projects.reverse().map((el) => (
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
