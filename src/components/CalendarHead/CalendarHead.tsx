import css from "./CalendarHead.module.css";
import { DaySizes } from "src/helpers/getDaySize";

const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];

interface CalendarHeadProps {
  daySizes: DaySizes;
}

export function CalendarHead({ daySizes }: CalendarHeadProps) {
  return (
    <div className={css.headWrapper} style={{ height: daySizes.height }}>
      {dayNames.map((item, index) => {
        return (
          <p className={css.text} key={index} style={{ width: daySizes.width }}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
