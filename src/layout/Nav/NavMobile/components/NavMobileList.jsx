import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeIcon from "@mui/icons-material/Code";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import css from "./NavMobileList.module.scss";

export default function NavMobileList({ toggleMenuOpen }) {
  const handleNavigate = () => {
    toggleMenuOpen();
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <button onClick={handleNavigate}>
            <HomeOutlinedIcon />
          </button>
          <h3>Home</h3>
        </li>
        <li>
          <button onClick={handleNavigate}>
            <CodeIcon />
          </button>
          <h3>Projects</h3>
        </li>
        <li>
          <button onClick={handleNavigate}>
            <MailOutlineIcon />
          </button>
          <h3>Contact</h3>
        </li>
      </ul>
    </div>
  );
}
