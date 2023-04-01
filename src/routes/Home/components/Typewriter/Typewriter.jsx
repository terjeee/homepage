import { TypeAnimation } from "react-type-animation";

import css from "./Typewriter.module.scss";

export default function Typewriter() {
  return (
    <div className={css.typewriter}>
      <TypeAnimation
        sequence={["Hei", 5000, "こんにちは", 5000, "Ciao", 5000, "привет", 5000, "你好", 5000, "مرحبًا", 5000]}
        wrapper="h1"
        speed="1"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
}
