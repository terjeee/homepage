import { TypeAnimation } from "react-type-animation";
import css from "./Welcome.module.scss";

export default function Welcome() {
  return (
    <header className={css.welcome} id="home">
      <div className={css.container}>
        <div className={css.text}>
          <TypeAnimation
            sequence={[
              "Hei",
              3000,
              "Bonjour ",
              3000,
              "こんにちは",
              3000,
              "Ciao",
              3000,
              "你好",
              3000,
              "Guten Tag",
              3000,
              "مرحبا",
              3000,
            ]}
            wrapper="h1"
            speed="1"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "3rem",
              fontFamily: "inherit",
              color: "inherit",
              letterSpacing: "7.5px",
            }}
          />
        </div>
      </div>
    </header>
  );
}
