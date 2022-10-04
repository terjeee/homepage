import Welcome from "./components/Welcome";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies";

import css from "./Home.module.scss";

export default function Home() {
  return (
    <main className={css.home}>
      <Welcome />
      <Technologies />
      <Projects />
    </main>
  );
}
