import { WeekNumberLabel } from "../../../types/Labels";

/** The default ARIA label for the WeekNumberRowHeader element. */
export const labelWeekNumber: WeekNumberLabel = (n): string => {
  return `Week n. ${n}`;
};
