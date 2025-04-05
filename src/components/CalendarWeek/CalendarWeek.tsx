import css from "./CalendarWeek.module.css";
import { Day, Week } from "src/types/types";
import { CalendarDay } from "../CalendarDay/CalendarDay";
import { DaySizes } from "src/helpers/getDaySize";

interface CalendarWeekProps {
  week: Week;
  index: number;
  setUpSelectedDay: (dayItem: Day) => void;
  selectedDay: string | undefined;
  secondDay: string | undefined;
  range: string[] | undefined;
  daySizes: DaySizes;
  formattedDateToday: string;
}

export function CalendarWeek({
  week,
  index,
  setUpSelectedDay,
  selectedDay,
  secondDay,
  range,
  daySizes,
  formattedDateToday,
}: CalendarWeekProps) {
  const extraItems = [
    { id: "1", type: "gap" },
    { id: "3", type: "gap" },
    { id: "5", type: "gap" },
    { id: "7", type: "gap" },
    { id: "9", type: "gap" },
    { id: "11", type: "gap" },
  ] as Week;

  const weekDaysWithGaps = week.flatMap((item, index) =>
    index < extraItems.length ? [item, extraItems[index]] : [item]
  );

  const rangeWeek = weekDaysWithGaps.filter((item) =>
    range?.some((rangeItem) => rangeItem === item.id)
  );

  const firstDayIndex = weekDaysWithGaps.findIndex(
    (item) => item.id === rangeWeek[0]?.id
  );

  const lastDayIndex = weekDaysWithGaps.findIndex(
    (item) => item.id === rangeWeek[rangeWeek.length - 1]?.id
  );

  const slicedArray = weekDaysWithGaps.slice(firstDayIndex, lastDayIndex + 1);

  return (
    <div key={index} className={css.weekWrapper}>
      {weekDaysWithGaps.map((dayItem, index) => {
        return (
          <CalendarDay
            key={index}
            dayItem={dayItem}
            setUpSelectedDay={setUpSelectedDay}
            selectedDay={selectedDay}
            secondDay={secondDay}
            slicedArray={slicedArray}
            range={range}
            daySizes={daySizes}
            formattedDateToday={formattedDateToday}
          />
        );
      })}
    </div>
  );
}
