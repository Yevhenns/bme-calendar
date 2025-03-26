export interface Day {
    id: string;
    day: number;
    type: "prev" | "current" | "next";
}
export type Week = Day[];
export type Month = Week[];
