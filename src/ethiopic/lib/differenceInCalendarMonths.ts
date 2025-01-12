import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date
): number {
  const ethiopicLeft = toEthiopicDate(dateLeft);
  const ethiopicRight = toEthiopicDate(dateRight);
  return (
    (ethiopicLeft.year - ethiopicRight.year) * 13 +
    (ethiopicLeft.month - ethiopicRight.month)
  );
}
