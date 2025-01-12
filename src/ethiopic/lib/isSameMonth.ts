import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function isSameMonth(dateLeft: Date, dateRight: Date): boolean {
  const etDate1 = toEthiopicDate(dateLeft);
  const etDate2 = toEthiopicDate(dateRight);
  return etDate1.year === etDate2.year && etDate1.month === etDate2.month;
}
