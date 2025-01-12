import {
  toEth,
  toGreg,
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";

export function endOfMonth(date: Date): Date {
  const etDate = toEth(date);
  const lastDay = ethiopianMonthLength(etDate.Month, etDate.Year);

  return toGreg({
    ...etDate,
    Day: lastDay
  });
}
