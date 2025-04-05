import css from "./CalendarBody.module.css";
import { DaySizes } from "src/helpers/getDaySize";
import { Day, Month } from "../../types/types";
import { CalendarWeek } from "../CalendarWeek/CalendarWeek";

interface CalendarBodyBody {
  finalDaysArray: Month | undefined;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  setUpSelectedDay: (dayItem: Day) => void;
  range: string[] | undefined;
  daySizes: DaySizes;
}

export function CalendarBody({
  finalDaysArray,
  selectedDay,
  secondDay,
  setUpSelectedDay,
  range,
  daySizes,
}: CalendarBodyBody) {
  const formattedDateToday = new Date().toISOString().slice(0, 10);

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
              daySizes={daySizes}
              formattedDateToday={formattedDateToday}
            />
          );
        })}
    </div>
  );
}
