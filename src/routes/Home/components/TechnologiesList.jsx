import { IconHtml, IconCss, IconSass, IconJs } from "../../../assets/icons/index";
import { IconReact, IconRedux, IconRouter, IconMui } from "../../../assets/icons/index";

import css from "./TechnologiesList.module.scss";

export default function TechnologiesList() {
  return (
    <ul className={css.icons}>
      <li>
        <IconHtml />
      </li>
      <li>
        <IconCss />
      </li>
      <li>
        <IconSass />
      </li>
      <li>
        <IconJs />
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
      <li>
        <IconMui />
      </li>
    </ul>
  );
}
