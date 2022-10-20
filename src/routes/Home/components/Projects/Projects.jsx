import { PROJECTS } from "../../../../assets/PROJECTS";

import { TypeAnimation } from "react-type-animation";
import TechnologiesList from "./components/TechnologiesList";
import ProjectSingle from "./components/ProjectSingle";
import css from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={css.projects} id="projects">
      <div className={css.container}>
        <TypeAnimation
          sequence={[
            "Prosjekter",
            5000,
            "проекты",
            5000,
            "progetti",
            5000,
            "プロジェクト",
            5000,
            "项目",
            5000,
            "المشاريع",
            5000,
          ]}
          wrapper="h1"
          speed="1"
          cursor={true}
          repeat={Infinity}
          style={{
            fontFamily: "inherit",
            color: "inherit",
            letterSpacing: "7.5px",
          }}
        />
        <TechnologiesList />
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
      </div>
    </section>
  );
}
