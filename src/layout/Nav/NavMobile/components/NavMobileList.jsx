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
          <Link to="/" onClick={handleNavigate}>
            <HomeOutlinedIcon />
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <HashLink smooth to="/#projects" onClick={handleNavigate}>
            <CodeIcon />
            <h3>Projects</h3>
          </HashLink>
        </li>
        <li>
          <Link to="/contact" onClick={handleNavigate}>
            <MailOutlineIcon />
            <h3>Contact</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
