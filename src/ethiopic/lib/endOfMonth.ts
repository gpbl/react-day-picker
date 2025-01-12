import {
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";
import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function endOfMonth(date: Date): Date {
  const etDate = toEthiopicDate(date);
  const lastDay = ethiopianMonthLength(etDate.month, etDate.year);

  return toGregorianDate({
    ...etDate,
    day: lastDay
  });
}
