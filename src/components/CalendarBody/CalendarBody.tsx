import { Day, Month } from "../../types/types";
import { DaySize } from "../Calendar/Calendar";
import { CalendarWeek } from "../CalendarWeek/CalendarWeek";
import css from "./CalendarBody.module.css";

interface CalendarBodyBody {
  finalDaysArray: Month | undefined;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  setUpSelectedDay: (dayItem: Day) => void;
  range: string[] | undefined;
  daySize: DaySize;
}

export function CalendarBody({
  finalDaysArray,
  selectedDay,
  secondDay,
  setUpSelectedDay,
  range,
  daySize,
}: CalendarBodyBody) {
  return (
    <div className={css.monthWrapper}>
      {finalDaysArray &&
        finalDaysArray.map((week, index) => {
          return (
            <CalendarWeek
              key={index}
              week={week}
              index={index}
              setUpSelectedDay={setUpSelectedDay}
              selectedDay={selectedDay}
              secondDay={secondDay}
              range={range}
              daySize={daySize}
            />
          );
        })}
    </div>
  );
}
