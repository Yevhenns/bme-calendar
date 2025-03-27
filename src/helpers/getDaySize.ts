import { DaySize } from "src/types/types";

export type DaySizes = ReturnType<typeof getDaySize>;

export function getDaySize(daySize: DaySize) {
  if (daySize === "mobile")
    return {
      width: 40,
      height: 32,
    };
  return {
    width: 24,
    height: 24,
  };
}
