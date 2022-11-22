import { useEffect, useState } from "react";
import { handleScrollToTop } from "../utils/functions/helpers";
import UpArrow from "@mui/icons-material/KeyboardDoubleArrowUp";
import css from "./BtnScrollTop.module.scss";

export default function BtnScrollTop() {
  const [yLocation, setYLocation] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", () => setYLocation(window.pageYOffset));
    return window.removeEventListener("scroll", () => setYLocation(window.pageYOffset));
  }, []);

  return (
    <>
      {yLocation > 100 && (
        <button className={css.btn} onClick={handleScrollToTop}>
          <UpArrow />
        </button>
      )}
    </>
  );
}
