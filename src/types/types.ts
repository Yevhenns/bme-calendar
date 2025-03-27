export interface Day {
  id: string;
  day?: number;
  type: "prev" | "current" | "next" | "gap";
}

export type Week = Day[];

export type Month = Week[];
