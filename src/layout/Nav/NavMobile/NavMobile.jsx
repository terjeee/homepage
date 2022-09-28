import { useState } from "react";
import NavMobileList from "./components/NavMobileList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import css from "./NavMobile.module.scss";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    toggleMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <div>
          {!menuOpen && (
            <h2>
              {"<"}
              <span>terje</span>
              {" />"}
            </h2>
          )}
        </div>
        <button onClick={handleToggleMenu}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      {menuOpen && <NavMobileList toggleMenuOpen={toggleMenuOpen} />}
    </nav>
  );
}
