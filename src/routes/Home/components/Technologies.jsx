import TechnologiesList from "./TechnologiesList";

import css from "./Technologies.module.scss";

export default function Technologies() {
  return (
    <section className={css.technologies}>
      <div className={css.container}>
        <TechnologiesList />
      </div>
    </section>
  );
}
