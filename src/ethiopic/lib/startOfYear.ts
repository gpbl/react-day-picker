import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function startOfYear(date: Date): Date {
  const etDate = toEthiopicDate(date);
  return toGregorianDate({
    year: etDate.year,
    month: 1,
    day: 1
  });
}
