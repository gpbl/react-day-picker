import { toGregorianDate } from "../utils/dateConversion.js";

export const newDate = (
  year: number,
  monthIndex: number,
  day: number,
): Date => {
  return toGregorianDate({ year, monthIndex, day });
};
