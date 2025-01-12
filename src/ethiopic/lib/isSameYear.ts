import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function isSameYear(dateLeft: Date, dateRight: Date): boolean {
  const etDate1 = toEthiopicDate(dateLeft);
  const etDate2 = toEthiopicDate(dateRight);
  return etDate1.year === etDate2.year;
}
