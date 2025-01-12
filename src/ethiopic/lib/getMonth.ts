import { toEthiopicDate } from "../utils/toEthiopicDate.js";

export function getMonth(date: Date): number {
  const etDate = toEthiopicDate(date);
  return etDate.month - 1; // Convert to 0-based for compatibility
}
