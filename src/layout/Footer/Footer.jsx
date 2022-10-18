import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${css.footer} `}>
      <div className={css.line}>
        <div className={css.container}>
          <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <Link to="/contact">
            <MailOutlineIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
