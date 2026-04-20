import { toHijriDate } from "../utils/conversion.js";
import { setMonth } from "./setMonth.js";

export function addMonths(date: Date, amount: number): Date {
  const hijri = toHijriDate(date);
  return setMonth(date, hijri.monthIndex + amount);
}
