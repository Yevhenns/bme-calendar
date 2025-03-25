interface CalendarDay {
  id: string;
  day: number;
  type: "prev" | "current" | "next";
}

type CalendarWeek = CalendarDay[];

type CalendarMonth = CalendarWeek[];
