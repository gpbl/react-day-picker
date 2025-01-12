import { toEth } from "../utils/ethiopicDateUtils.js";

export function getYear(date: Date): number {
  const etDate = toEth(date);
  return etDate.Year;
}
