import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date
): number {
  const etDate1 = toEthiopicDate(dateLeft);
  const etDate2 = toEthiopicDate(dateRight);
  return (etDate1.year - etDate2.year) * 13 + (etDate1.month - etDate2.month);
}
