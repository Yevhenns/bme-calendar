import dayjs from "dayjs";

import weekOfYear from "dayjs/plugin/weekOfYear";
import css from "./CalendarDay.module.css";
import clsx from "clsx";

dayjs.extend(weekOfYear);

interface DayWrapperProps {
  dayItem: CalendarDay;
  setUpSelectedDay: (dayItem: CalendarDay) => void;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  range: string[] | undefined;
}

export function CalendarDay({
  dayItem,
  setUpSelectedDay,
  selectedDay,
  secondDay,
  range,
}: DayWrapperProps) {
  const { id, type } = dayItem;

  const dayToday = dayjs().format("YYYY-MM-DD");

  const onClick = () => {
    setUpSelectedDay(dayItem);
  };

  const isInRange = range?.some((item) => item === id);

  return (
    <button
      onClick={onClick}
      className={clsx(
        css.container,
        dayToday === id ? css.dayToday : "",
        selectedDay === id || secondDay === id ? css.selectedDay : "",
        isInRange ? css.isInRange : ""
      )}
    >
      <p className={type !== "current" ? css.notInCurrentMonth : ""}>
        {dayItem.day}
      </p>
    </button>
  );
}
