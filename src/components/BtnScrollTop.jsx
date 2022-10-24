import { handleScrollToTop } from "../utils/functions/helpers";
import UpArrow from "@mui/icons-material/KeyboardDoubleArrowUp";
import css from "./BtnScrollTop.module.scss";

export default function BtnScrollTop() {
  return (
    <button className={css.btn} onClick={handleScrollToTop}>
      <UpArrow />
    </button>
  );
}
