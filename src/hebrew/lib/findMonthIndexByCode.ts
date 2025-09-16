import { getMonthCode, monthsInHebrewYear } from "../utils/calendarMath.js";

export const findMonthIndexByCode = (
  year: number,
  preferredCode: string,
): number => {
  const monthsCount = monthsInHebrewYear(year);
  for (let index = 0; index < monthsCount; index += 1) {
    if (getMonthCode(year, index) === preferredCode) {
      return index;
    }
  }
  return -1;
};
