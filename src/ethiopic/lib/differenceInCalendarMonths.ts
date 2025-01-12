import { toEth } from "../utils/ethiopicDateUtils.js";

export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date
): number {
  const etDate1 = toEth(dateLeft);
  const etDate2 = toEth(dateRight);
  return (etDate1.Year - etDate2.Year) * 13 + (etDate1.Month - etDate2.Month);
}
