import { toHebrewDate } from "../utils/dateConversion.js";

export const isSameMonth = (dateLeft: Date, dateRight: Date): boolean => {
  const left = toHebrewDate(dateLeft);
  const right = toHebrewDate(dateRight);
  return left.year === right.year && left.monthIndex === right.monthIndex;
};
