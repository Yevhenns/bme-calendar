export interface Day {
  id: string;
  day?: number;
  type: "prev" | "current" | "next" | "gap";
}

export type Week = Day[];

export type Month = Week[];

export type DaySize = "desktop" | "mobile";

export type DatePicker = {
  type?: "calendar";
  setDay: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRange?: never;
  range?: never;
  daySize?: DaySize;
};

export type DateRangePicker = {
  type: "range";
  setDay?: never;
  setRange: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  range: string[] | undefined;
  daySize?: DaySize;
};
