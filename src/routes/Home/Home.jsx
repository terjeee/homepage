import Welcome from "./components/Welcome/Welcome";
import Projects from "./components/Projects/Projects";

import css from "./Home.module.scss";

export default function Home() {
  return (
    <main className={css.home}>
      <Welcome />
      <Projects />
    </main>
  );
}
