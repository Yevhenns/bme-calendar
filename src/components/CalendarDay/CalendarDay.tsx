import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import clsx from "clsx";
import { Day } from "../../types/types";
import css from "./CalendarDay.module.css";

dayjs.extend(weekOfYear);

interface DayWrapperProps {
  dayItem: Day;
  setUpSelectedDay: (dayItem: Day) => void;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  slicedArray: Day[];
  range: string[] | undefined;
}

export function CalendarDay({
  dayItem,
  setUpSelectedDay,
  selectedDay,
  secondDay,
  slicedArray,
  range,
}: DayWrapperProps) {
  const { id, type } = dayItem;

  const dayToday = dayjs().format("YYYY-MM-DD");

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
      className={clsx(
        css.wrapper,
        isGapInRange ? css.wrapperIsInRange : "",
        isGap ? css.isGapWrapper : "",
        isFirst ? css.firstDay : "",
        isLast ? css.lastDay : ""
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          css.container,
          dayToday === id ? css.dayToday : "",
          selectedDay === id || secondDay === id ? css.selectedDay : "",
          isGap ? css.isGapBtn : ""
        )}
      >
        <p className={type !== "current" ? css.notInCurrentMonth : ""}>
          {dayItem.day}
        </p>
      </button>
    </div>
  );
}
