import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import css from "./NavDesktop.module.scss";

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <ul className={css.list}>
          <li>
            <HashLink smooth to="/#home">
              <h3>home</h3>
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              <h3>projects</h3>
            </HashLink>
          </li>
          <li>
            <Link to="/homepage/contact">
              <h3>contact</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
