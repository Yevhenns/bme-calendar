import dayjs from "dayjs";

import weekOfYear from "dayjs/plugin/weekOfYear";
import css from "./CalendarDay.module.css";

dayjs.extend(weekOfYear);

interface DayWrapperProps {
  index: number;
  dayItem: CalendarDay;
  setUpSelectedDay: (dayItem: CalendarDay) => void;
}

export function CalendarDay({
  index,
  dayItem,
  setUpSelectedDay,
}: DayWrapperProps) {
  const { id, type } = dayItem;

  const SATURDAY = 6;
  const SUNDAY = 0;
  const isWeekend = index === SATURDAY || index === SUNDAY;
  const isDayToday = dayjs().format("YYYY-MM-DD") === id;

  const onPress = () => {
    setUpSelectedDay(dayItem);
  };

  return (
    <button onClick={onPress} className={css.container}>
      <p className={type !== "current" ? css.notInCurrentMonth : ""}>
        {dayItem.day}
      </p>
    </button>
  );
}
