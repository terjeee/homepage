import { useState } from "react";

import { IconJs, IconTs, IconSass, IconReact } from "../../../../assets/icons/index";
import { IconRedux, IconRouter } from "../../../../assets/icons/index";

import css from "./TechnologiesList.module.scss";

export default function TechnologiesList() {
  const [showJs, setShowJs] = useState(false);

  const toggleJs = () => {
    setShowJs(() => !showJs);
  };

  return (
    <ul className={css.icons}>
      <li className={css.toggleIcon} onClick={toggleJs}>
        {showJs && <IconJs />}
        {!showJs && <IconTs />}
      </li>
      <li>
        <IconSass />
      </li>
      <li>
        <IconReact />
      </li>
      <li>
        <IconRedux />
      </li>
      <li>
        <IconRouter />
      </li>
    </ul>
  );
}
