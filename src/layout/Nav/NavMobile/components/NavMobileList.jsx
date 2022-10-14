import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeIcon from "@mui/icons-material/Code";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import css from "./NavMobileList.module.scss";

export default function NavMobileList(props) {
  const { toggleMenuOpen } = props;

  const handleNavigate = () => {
    toggleMenuOpen();
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <HashLink smooth to="/#home" onClick={handleNavigate}>
            <button className={css.icon}>
              <HomeOutlinedIcon />
            </button>
            <h3>home</h3>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects" onClick={handleNavigate}>
            <button className={css.icon}>
              <CodeIcon />
            </button>
            <h3>projects</h3>
          </HashLink>
        </li>
        <li>
          <Link to="/contact" onClick={handleNavigate}>
            <button className={css.icon}>
              <MailOutlineIcon />
            </button>
            <h3>contact</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
