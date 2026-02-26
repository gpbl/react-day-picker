import { toGregorianDate, toHijriDate } from "./conversion.js";
import { clampHijriDate } from "./range.js";

const MAX_DAY_IN_HIJRI_MONTH = 30;
const MIN_DAY_IN_HIJRI_MONTH = 29;

export function getDaysInMonth(year: number, monthIndex: number): number {
  const clamped = clampHijriDate({ year, monthIndex, day: 1 });

  for (
    let day = MAX_DAY_IN_HIJRI_MONTH;
    day >= MIN_DAY_IN_HIJRI_MONTH;
    day -= 1
  ) {
    const candidateDate = toGregorianDate({
      year: clamped.year,
      monthIndex: clamped.monthIndex,
      day,
    });
    const roundTrip = toHijriDate(candidateDate);
    if (
      roundTrip.year === clamped.year &&
      roundTrip.monthIndex === clamped.monthIndex &&
      roundTrip.day === day
    ) {
      return day;
    }
  }

  return MIN_DAY_IN_HIJRI_MONTH;
}
