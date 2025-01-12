import { toEth } from "../utils/ethiopicDateUtils.js";

export function isSameMonth(dateLeft: Date, dateRight: Date): boolean {
  const etDate1 = toEth(dateLeft);
  const etDate2 = toEth(dateRight);
  return etDate1.Year === etDate2.Year && etDate1.Month === etDate2.Month;
}
