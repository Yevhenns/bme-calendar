import { useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarNavigation } from "../CalendarNavigation/CalendarNavigation";
import { CalendarHead } from "../CalendarHead/CalendarHead";
import { CalendarBody } from "../CalendarBody/CalendarBody";

import minMax from "dayjs/plugin/minMax";
import dayjs from "dayjs";
import css from "./Calendar.module.css";
import { Day } from "../../types";

dayjs.extend(minMax);

type CalendarProps =
  | {
      type?: "calendar";
      setDay: React.Dispatch<React.SetStateAction<string | undefined>>;
      setRange?: never;
      range?: never;
    }
  | {
      type: "range";
      setDay?: never;
      setRange: React.Dispatch<React.SetStateAction<string[] | undefined>>;
      range: string[] | undefined;
    };

export function Calendar({
  type = "calendar",
  setDay,
  setRange,
  range,
}: CalendarProps) {
  const [selectedDay, setSelectedDay] = useState<string>();
  const [secondDay, setSecondDay] = useState<string>();

  const { finalDaysArray, currentMonthName, incrementMonth, decrementMonth } =
    useCalendar();

  const setUpSelectedDay = (dayItem: Day) => {
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

  const firstDate = dayjs.min(dayjs(selectedDay), dayjs(secondDay));
  const firstDateString = firstDate.format("YYYY-MM-DD");

  const secondDate = dayjs.max(dayjs(selectedDay), dayjs(secondDay));

  const difference = secondDate.diff(firstDate, "day");

  useEffect(() => {
    if (type === "range" && setRange) {
      if (selectedDay && secondDay) {
        let startDay = firstDate;
        const rangeArray = [firstDateString];
        for (let i = 0; i < difference; i++) {
          const day = startDay.add(1, "day");
          rangeArray.push(day.format("YYYY-MM-DD"));
          startDay = day;
        }
        setRange(rangeArray);
      }
      if (!secondDay) {
        setRange(undefined);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondDay, selectedDay, setRange, type, difference]);

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
        range={range}
      />
    </div>
  );
}
