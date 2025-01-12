import { ethiopianMonthLength } from "../utils/ethiopicDateUtils.js";
import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function addMonths(date: Date, amount: number): Date {
  const etDate = toEthiopicDate(date);
  let newMonth = etDate.month + amount;
  const yearAdjustment = Math.floor((newMonth - 1) / 13);
  newMonth = ((newMonth - 1) % 13) + 1;

  if (newMonth < 1) {
    newMonth += 13;
  }

  const newYear = etDate.year + yearAdjustment;

  // Adjust day if it exceeds the month length
  const monthLength = ethiopianMonthLength(newMonth, newYear);
  const newDay = Math.min(etDate.day, monthLength);

  return toGregorianDate({
    year: newYear,
    month: newMonth,
    day: newDay
  });
}
