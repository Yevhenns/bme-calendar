import { useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarNavigation } from "../CalendarNavigation/CalendarNavigation";
import { CalendarHead } from "../CalendarHead/CalendarHead";
import { CalendarBody } from "../CalendarBody/CalendarBody";
import css from "./Calendar.module.css";

type CalendarProps =
  | {
      type?: "calendar";
      setDay: React.Dispatch<React.SetStateAction<string | undefined>>;
      setRange?: never;
    }
  | {
      type: "range";
      setDay?: never;
      setRange: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    };

export function Calendar({
  type = "calendar",
  setDay,
  setRange,
}: CalendarProps) {
  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [secondDay, setSecondDay] = useState<string | undefined>();

  const setUpSelectedDay = (dayItem: CalendarDay) => {
    if (type === "calendar" && setDay) {
      setSelectedDay(dayItem.id);
      setDay(dayItem.id);
      return;
    }

    if (type === "range") {
      if (!selectedDay) {
        setSelectedDay(dayItem.id);
      }
      if (selectedDay) {
        setSecondDay(dayItem.id);
      }
      if (selectedDay && secondDay) {
        setSelectedDay(dayItem.id);
        setSecondDay(undefined);
      }
    }
  };

  const { finalDaysArray, currentMonthName, incrementMonth, decrementMonth } =
    useCalendar();

  useEffect(() => {
    if (type === "range" && setRange) {
      if (selectedDay && secondDay) {
        setRange([selectedDay, secondDay]);
      }
      if (!secondDay) {
        setRange(undefined);
      }
    }
  }, [secondDay, selectedDay, setRange, type]);

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
        secondDay={secondDay}
        setUpSelectedDay={setUpSelectedDay}
      />
    </div>
  );
}
