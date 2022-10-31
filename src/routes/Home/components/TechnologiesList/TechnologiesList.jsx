import { IconJs, IconTs, IconSass, IconReact } from "../../../../assets/icons/index";
import { IconRedux, IconRouter } from "../../../../assets/icons/index";
import css from "./TechnologiesList.module.scss";

export default function TechnologiesList() {
  return (
    <ul className={css.icons}>
      <li>
        <IconJs />
        {/* <IconTs /> */}
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
