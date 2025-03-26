import { CalendarDay } from "../CalendarDay/CalendarDay";
import css from "./CalendarBody.module.css";

interface CalendarBodyBody {
  finalDaysArray: CalendarMonth | undefined;
  selectedDay: string | undefined;
  setUpSelectedDay: (dayItem: CalendarDay) => void;
}

export function CalendarBody({
  finalDaysArray,
  selectedDay,
  setUpSelectedDay,
}: CalendarBodyBody) {
  return (
    <div className={css.monthWrapper}>
      {finalDaysArray &&
        finalDaysArray.map((item, index) => {
          return (
            <div key={index} className={css.weekWrapper}>
              {item.map((dayItem, index) => {
                return (
                  <CalendarDay
                    key={index}
                    dayItem={dayItem}
                    setUpSelectedDay={setUpSelectedDay}
                    selectedDay={selectedDay}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
