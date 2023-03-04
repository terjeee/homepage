import { useState } from "react";

import {
  IconJs,
  IconTs,
  IconSass,
  IconReact,
  IconTailwind,
  IconSvelte,
  IconNode,
  IconNext,
  IconMongoDb,
} from "../../../../assets/icons/index";
import { IconRedux, IconRouter } from "../../../../assets/icons/index";

import css from "./TechnologiesList.module.scss";

export default function TechnologiesList() {
  const [showJs, setShowJs] = useState(false);

  const toggleJs = () => {
    setShowJs(() => !showJs);
  };

  return (
    <div className={css.container}>
      <ul className={css.icons_col_one}>
        <li className={css.toggleIcon} onClick={toggleJs}>
          {showJs && <IconJs />}
          {!showJs && <IconTs />}
        </li>
        <li>
          <IconReact />
        </li>
        <li>
          <IconNext />
        </li>
        <li>
          <IconSvelte />
        </li>
      </ul>
      <ul className={css.icons_col_two}>
        <li>
          <IconTailwind />
        </li>
        <li>
          <IconSass />
        </li>
        <li>
          <IconRedux />
        </li>
        <li>
          <IconNode />
        </li>
        <li>
          <IconMongoDb />
        </li>
      </ul>
    </div>
  );
}
