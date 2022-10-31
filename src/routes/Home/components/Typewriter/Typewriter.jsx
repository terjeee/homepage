import { TypeAnimation } from "react-type-animation";

import css from "./Typewriter.module.scss";

export default function Typewriter() {
  return (
    <div className={css.typewriter}>
      <TypeAnimation
        sequence={[
          "Prosjekter",
          5000,
          "проекты",
          5000,
          "progetti",
          5000,
          "プロジェクト",
          5000,
          "项目",
          5000,
          "المشاريع",
          5000,
        ]}
        wrapper="h1"
        speed="1"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
}
