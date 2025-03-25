import { CalendarDay } from "../CalendarDay/CalendarDay";
import css from "./CalendarBody.module.css";

interface CalendarBodyBody {
  finalDaysArray: CalendarMonth | undefined;
}

export function CalendarBody({ finalDaysArray }: CalendarBodyBody) {
  const setUpSelectedDay = (dayItem: CalendarDay) => {
    console.log(dayItem);
  };

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
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
