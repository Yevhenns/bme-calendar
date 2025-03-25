import css from "./CalendarHead.module.css";

const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];

export function CalendarHead() {
  return (
    <div className={css.headWrapper}>
      {dayNames.map((item, index) => {
        return (
          <p className={css.text} key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
