import { useState } from "react";
import useScrollLock from "../../../utils/hooks/useScrollLock";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavMobileList from "./components/NavMobileList";

import css from "./NavMobile.module.scss";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [toggleScollLock] = useScrollLock();

  const handleToggleMenu = () => {
    toggleMenuOpen((prevState) => !prevState);
    toggleScollLock();
  };

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <button className={css.hamburgerMenu} onClick={handleToggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {menuOpen && <NavMobileList toggleMenuOpen={handleToggleMenu} />}
    </nav>
  );
}
