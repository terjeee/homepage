import css from "./NavDesktop.module.scss";

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <div>
          <h2>
            {"<"}
            <span>terje</span>
            {" />"}
          </h2>
        </div>
      </div>
    </nav>
  );
}
