import { type Interval, toDate } from "date-fns";
import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";
import { monthIndexToHebrewDate, monthsSinceEpoch } from "../utils/serial.js";

export const eachMonthOfInterval = (interval: Interval): Date[] => {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);
  if (endDate.getTime() < startDate.getTime()) {
    return [];
  }
  const startHebrew = toHebrewDate(startDate);
  const endHebrew = toHebrewDate(endDate);
  const startIndex = monthsSinceEpoch(startHebrew);
  const endIndex = monthsSinceEpoch(endHebrew);

  const months: Date[] = [];
  for (let index = startIndex; index <= endIndex; index += 1) {
    const hebrew = monthIndexToHebrewDate(index, 1);
    months.push(toGregorianDate(hebrew));
  }
  return months;
};
