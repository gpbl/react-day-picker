import { toEthiopicDate } from "../utils/toEthiopicDate.js";
import { toGregorianDate } from "../utils/toGregorianDate.js";

export function startOfMonth(date: Date): Date {
  const etDate = toEthiopicDate(date);
  return toGregorianDate({
    ...etDate,
    day: 1
  });
}
