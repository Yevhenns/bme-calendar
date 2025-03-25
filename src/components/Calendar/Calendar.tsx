import { useCalendar } from "../../hooks/useCalendar";
import { CalendarNavigation } from "../CalendarNavigation/CalendarNavigation";
import { CalendarHead } from "../CalendarHead/CalendarHead";
import { CalendarBody } from "../CalendarBody/CalendarBody";
import css from "./Calendar.module.css";

export function Calendar() {
  const { finalDaysArray, currentMonthName, incrementMonth, decrementMonth } =
    useCalendar();

  return (
    <div className={css.calendar}>
      <CalendarNavigation
        currentMonthName={currentMonthName}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
      />
      <CalendarHead />
      <CalendarBody finalDaysArray={finalDaysArray} />
    </div>
  );
}
