import { Button } from "@mui/material";

import css from "./NavDesktop.module.scss";

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <Button variant="contained">Log In</Button>
      </div>
    </nav>
  );
}
