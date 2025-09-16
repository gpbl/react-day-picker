import { toHebrewDate } from "../utils/dateConversion.js";

export const getMonth = (date: Date): number => {
  return toHebrewDate(date).monthIndex;
};
