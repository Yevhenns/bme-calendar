import css from "./CalendarDay.module.css";
import { Day } from "../../types/types";
import { DaySizes } from "src/helpers/getDaySize";

interface DayWrapperProps {
  dayItem: Day;
  setUpSelectedDay: (dayItem: Day) => void;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  slicedArray: Day[];
  range: string[] | undefined;
  daySizes: DaySizes;
  formattedDateToday: string;
}

export function CalendarDay({
  dayItem,
  setUpSelectedDay,
  selectedDay,
  secondDay,
  slicedArray,
  range,
  daySizes,
  formattedDateToday,
}: DayWrapperProps) {
  const { id, type } = dayItem;

  const isGap = dayItem.type === "gap";

  const onClick = () => {
    if (!isGap) setUpSelectedDay(dayItem);
  };

  const isGapInRange = slicedArray.some((item) => item.id === id);

  const isFirst = range?.some((item, index) => item === id && index === 0);

  const isLast = range?.some(
    (item, index) => item === id && index === range.length - 1
  );

  return (
    <div
      className={`${css.wrapper}
      ${isGapInRange ? css.wrapperIsInRange : ""}
      ${isGap ? css.isGapWrapper : ""}
      ${isFirst ? css.firstDay : ""}
      ${isLast ? css.lastDay : ""}
  `}
    >
      {!isGap && (
        <button
          type="button"
          aria-label="calendar day"
          style={{
            width: daySizes.width,
            height: daySizes.height,
          }}
          onClick={onClick}
          className={`${css.container}
            ${formattedDateToday === id ? css.dayToday : ""}
            ${selectedDay === id || secondDay === id ? css.selectedDay : ""}`}
        >
          <p className={type !== "current" ? css.notInCurrentMonth : ""}>
            {dayItem.day}
          </p>
        </button>
      )}
    </div>
  );
}
