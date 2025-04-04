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
        <svg className={css.rotate} width="32" height="32" fill="red">
          <use href="/sprite.svg#chevron" />
        </svg>
      </button>
      <p className={css.month}>{currentMonthName}</p>
      <button
        type="button"
        className={css.button}
        onClick={incrementMonth}
        aria-label="next month"
      >
        <svg width="32" height="32" fill="red">
          <use href="/sprite.svg#chevron" />
        </svg>
      </button>
    </div>
  );
}
