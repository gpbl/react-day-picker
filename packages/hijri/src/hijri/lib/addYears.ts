import { toHijriDate } from "../utils/conversion.js";
import { setYear } from "./setYear.js";

export function addYears(date: Date, amount: number): Date {
  const hijri = toHijriDate(date);
  return setYear(date, hijri.year + amount);
}
