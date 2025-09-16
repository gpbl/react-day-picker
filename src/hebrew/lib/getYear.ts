import { toHebrewDate } from "../utils/dateConversion.js";

export const getYear = (date: Date): number => {
  return toHebrewDate(date).year;
};
