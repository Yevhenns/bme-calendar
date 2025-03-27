import { DaySize } from "../Calendar/Calendar";
import css from "./CalendarHead.module.css";

const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];

interface CalendarHeadProps {
  daySize: DaySize;
}
export function CalendarHead({ daySize }: CalendarHeadProps) {
  return (
    <div className={css.headWrapper}>
      {dayNames.map((item, index) => {
        return (
          <p className={css.text} key={index} style={{ width: daySize.width }}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
