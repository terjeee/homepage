import NavMobile from "./components/NavMobile";
import NavDesktop from "./components/NavDesktop";

import css from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={css.nav}>
      <NavMobile />
      <NavDesktop />
    </nav>
  );
}
