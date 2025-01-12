import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function getYear(date: Date): number {
  const etDate = toEthiopicDate(date);
  return etDate.year;
}
