import { toHebrewDate } from "../utils/dateConversion.js";
import { monthsSinceEpoch } from "../utils/serial.js";

export const differenceInCalendarMonths = (
  dateLeft: Date,
  dateRight: Date,
): number => {
  const left = toHebrewDate(dateLeft);
  const right = toHebrewDate(dateRight);
  return monthsSinceEpoch(left) - monthsSinceEpoch(right);
};
