import { toEth, toGreg } from "../utils/ethiopicDateUtils.js";

export function addYears(date: Date, amount: number): Date {
  const etDate = toEth(date);
  return toGreg({
    ...etDate,
    Year: etDate.Year + amount
  });
}
