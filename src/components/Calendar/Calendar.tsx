import { useCalendar } from "../../hooks/useCalendar";
import { CalendarNavigation } from "../CalendarNavigation/CalendarNavigation";
import { CalendarHead } from "../CalendarHead/CalendarHead";
import { CalendarBody } from "../CalendarBody/CalendarBody";
import css from "./Calendar.module.css";
import { useState } from "react";

type CalendarProps = {
  type?: "calendar" | "range";
  setSelectedDay: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Calendar({
  type = "calendar",
  setSelectedDay: setDay,
}: CalendarProps) {
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined);
  // const [secondDay, setSecondDay] = useState<string | undefined>(undefined);
  // const [range, setRange] = useState<string[] | undefined>(undefined);
  console.log(type);

  const setUpSelectedDay = (dayItem: CalendarDay) => {
    setSelectedDay(dayItem.id);
    setDay(dayItem.id);
  };

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
      <CalendarBody
        finalDaysArray={finalDaysArray}
        selectedDay={selectedDay}
        setUpSelectedDay={setUpSelectedDay}
      />
    </div>
  );
}
