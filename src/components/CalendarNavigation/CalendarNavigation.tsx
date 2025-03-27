import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import css from "./CalendarNavigation.module.css";

interface CalendarNavigationProps {
  currentMonthName: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

export function CalendarNavigation({
  currentMonthName,
  incrementMonth,
  decrementMonth,
}: CalendarNavigationProps) {
  return (
    <div className={css.navigation}>
      <button
        className={css.button}
        onClick={decrementMonth}
        aria-label="previous month"
      >
        <BiChevronLeft size={32} />
      </button>
      <p className={css.month}>{currentMonthName}</p>
      <button
        className={css.button}
        onClick={incrementMonth}
        aria-label="next month"
      >
        <BiChevronRight size={32} />
      </button>
    </div>
  );
}
