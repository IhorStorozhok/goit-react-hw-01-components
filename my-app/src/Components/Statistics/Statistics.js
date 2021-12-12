import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Stats({ title, stats }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((el) => {
          return (
            <li className={s.listItem} key={el.id}>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  key: PropTypes.string,
};
