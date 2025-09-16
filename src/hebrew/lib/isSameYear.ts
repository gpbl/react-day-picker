import { toHebrewDate } from "../utils/dateConversion.js";

export const isSameYear = (dateLeft: Date, dateRight: Date): boolean => {
  return toHebrewDate(dateLeft).year === toHebrewDate(dateRight).year;
};
