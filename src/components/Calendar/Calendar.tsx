import css from "./Calendar.module.css";
import { useEffect, useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarNavigation } from "../CalendarNavigation/CalendarNavigation";
import { CalendarHead } from "../CalendarHead/CalendarHead";
import { CalendarBody } from "../CalendarBody/CalendarBody";
import { DatePicker, DateRangePicker, Day } from "../../types/types";
import { getDaySize } from "../../helpers/getDaySize";
import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

type CalendarProps = DatePicker | DateRangePicker;

export function Calendar({
  type = "calendar",
  setDay,
  setRange,
  range,
  daySize = "desktop",
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

  const day1 = dayjs(selectedDay);
  const day2 = dayjs(secondDay);

  const firstDate = dayjs.min(day1, day2);
  const secondDate = dayjs.max(day1, day2);

  const firstDateString = firstDate.format("YYYY-MM-DD");

  const difference = secondDate.diff(firstDate, "day");

  const daySizes = getDaySize(daySize);

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
      if (selectedDay && !secondDay) {
        setRange([selectedDay]);
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
      <CalendarHead daySizes={daySizes} />
      <CalendarBody
        finalDaysArray={finalDaysArray}
        selectedDay={selectedDay}
        secondDay={secondDay}
        setUpSelectedDay={setUpSelectedDay}
        range={range}
        daySizes={daySizes}
      />
    </div>
  );
}
