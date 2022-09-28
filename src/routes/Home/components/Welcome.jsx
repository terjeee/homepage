import { TypeAnimation } from "react-type-animation";
import css from "./Welcome.module.scss";

export default function Welcome() {
  return (
    <header className={css.welcome}>
      <div className={css.container}>
        <div className={css.text}>
          <TypeAnimation
            sequence={[
              "Hei",
              3000,
              "Bonjour",
              3000,
              "こんにちは",
              3000,
              "Ciao",
              3000,
              "你好",
              3000,
              "Guten Tag",
              3000,
              "नमस्ते",
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
              letterSpacing: "2.5px",
            }}
          />
        </div>
        <div className={css.image}></div>
      </div>
    </header>
  );
}
