import { toEth, toGreg, isLeapYearEt } from "../utils/ethiopicDateUtils.js";

export function endOfYear(date: Date): Date {
  const etDate = toEth(date);
  return toGreg({
    Year: etDate.Year,
    Month: 13,
    Day: isLeapYearEt(etDate.Year) ? 6 : 5
  });
}
