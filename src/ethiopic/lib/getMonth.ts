import { toEth } from "../utils/ethiopicDateUtils.js";

export function getMonth(date: Date): number {
  const etDate = toEth(date);
  return etDate.Month - 1; // Convert to 0-based for compatibility
}
