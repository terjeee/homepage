import { Button } from "@mui/material";

import css from "./NavDesktop.module.scss";

export default function NavBar() {
  return (
    <div className={css.container}>
      <Button variant="contained">Log In</Button>
    </div>
  );
}
