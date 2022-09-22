import GitHubIcon from "@mui/icons-material/GitHub";
import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${css.footer} `}>
      <div className={css.line}>
        <div className={css.container}>
          <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
