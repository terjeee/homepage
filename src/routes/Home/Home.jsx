import TypeWriter from "./components/Typewriter/Typewriter";
import Projects from "./components/Projects/Projects";
import TechnologiesList from "./components/TechnologiesList/TechnologiesList";
import BtnScrollTop from "../../components/BtnScrollTop";

import css from "./Home.module.scss";

export default function Home() {
  return (
    <div className={css.container}>
      <TypeWriter />
      <TechnologiesList />
      <Projects />
      <BtnScrollTop />
    </div>
  );
}
