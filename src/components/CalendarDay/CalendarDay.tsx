import dayjs from "dayjs";

import weekOfYear from "dayjs/plugin/weekOfYear";
import css from "./CalendarDay.module.css";

dayjs.extend(weekOfYear);

interface DayWrapperProps {
  dayItem: CalendarDay;
  setUpSelectedDay: (dayItem: CalendarDay) => void;
}

export function CalendarDay({ dayItem, setUpSelectedDay }: DayWrapperProps) {
  const { type } = dayItem;

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
