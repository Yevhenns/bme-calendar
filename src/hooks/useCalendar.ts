import { useEffect, useState } from "react";
import { Month } from "../types/types";

export function useCalendar() {
  const [finalDaysArray, setFinalDaysArray] = useState<Month>();
  const [dateToday, setDateToday] = useState(new Date());

  const year = dateToday.getFullYear();

  const currentMonthNumber = (dateToday.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const currentMonthName = new Intl.DateTimeFormat("uk-UK", {
    month: "long",
  }).format(dateToday);
  const currentMonthDaysCount = new Date(
    year,
    +currentMonthNumber,
    0
  ).getDate();
  const currentMonthFirstDayIndex = new Date(
    `${year}-${currentMonthNumber}-01`
  ).getDay();

  const prevMonthFirstDay = new Date(year, Number(currentMonthNumber) - 2);
  const prevMonthNumber = (prevMonthFirstDay.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const prevMonthDaysCount = new Date(year, +prevMonthNumber, 0).getDate();

  const nextMonthNumber = (dateToday.getMonth() + 2)
    .toString()
    .padStart(2, "0");

  const incrementMonth = () => {
    const firstDayOfMonth = new Date(`${year}-${currentMonthNumber}-01`);
    const date = new Date(
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + currentMonthDaysCount)
    );

    setDateToday(date);
  };

  const decrementMonth = () => {
    const firstDayOfMonth = new Date(`${year}-${currentMonthNumber}-01`);
    const date = new Date(
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - prevMonthDaysCount)
    );

    setDateToday(date);
  };

  useEffect(() => {
    const prevMonthDayArray = [];
    if (currentMonthFirstDayIndex !== 0) {
      for (
        let i = prevMonthDaysCount;
        i > prevMonthDaysCount - currentMonthFirstDayIndex + 1;
        i--
      ) {
        prevMonthDayArray.push({
          id: `${year}-${prevMonthNumber}-${i.toString().padStart(2, "0")}`,
          day: i,
          type: "prev",
        });
      }
    } else {
      for (let i = prevMonthDaysCount; i > prevMonthDaysCount - 6; i--) {
        prevMonthDayArray.push({
          id: `${year}-${prevMonthNumber}-${i.toString().padStart(2, "0")}`,
          day: i,
          type: "prev",
        });
      }
    }

    const currentMonthDaysArray = [];
    for (let i = 1; i <= currentMonthDaysCount; i++) {
      currentMonthDaysArray.push({
        id: `${year}-${currentMonthNumber}-${i.toString().padStart(2, "0")}`,
        day: i,
        type: "current",
      });
    }

    const PrevAndCurrentMonthDays = [
      ...prevMonthDayArray.reverse(),
      ...currentMonthDaysArray,
    ];

    const finalDaysArray = [];
    for (let i = 0; i <= PrevAndCurrentMonthDays.length; i += 7) {
      finalDaysArray.push(PrevAndCurrentMonthDays.slice(i, i + 7));
    }

    const nextMonthDays =
      finalDaysArray.length * 7 - finalDaysArray.flat().length;

    if (nextMonthDays !== 7) {
      for (let i = 1; i <= nextMonthDays; i++) {
        finalDaysArray[finalDaysArray.length - 1].push({
          id: `${year}-${nextMonthNumber}-${i.toString().padStart(2, "0")}`,
          day: i,
          type: "next",
        });
      }
    }

    setFinalDaysArray(finalDaysArray as Month);
  }, [
    currentMonthDaysCount,
    currentMonthFirstDayIndex,
    currentMonthNumber,
    nextMonthNumber,
    prevMonthDaysCount,
    prevMonthNumber,
    year,
  ]);

  return {
    finalDaysArray,
    currentMonthName,
    incrementMonth,
    decrementMonth,
  };
}
