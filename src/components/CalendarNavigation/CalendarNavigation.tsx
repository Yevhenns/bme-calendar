import { Chevron } from "../icons/Chevron";
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
        type="button"
        className={css.button}
        onClick={decrementMonth}
        aria-label="previous month"
      >
        <Chevron rotated />
      </button>
      <p className={css.month}>{currentMonthName}</p>
      <button
        type="button"
        className={css.button}
        onClick={incrementMonth}
        aria-label="next month"
      >
        <Chevron />
      </button>
    </div>
  );
}
