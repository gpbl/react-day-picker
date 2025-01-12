import { EthiopicDate } from "./EthiopicDate.js";
import { createEthiopianDate, getDayNoGregorian } from "./ethiopicDateUtils.js";

/**
 * Converts a Gregorian date to an Ethiopic date.
 *
 * @param gregorianDate - A JavaScript Date object representing the Gregorian
 *   date.
 * @returns An EthiopicDate object.
 */
export function toEthiopicDate(gregorianDate: Date): EthiopicDate {
  return createEthiopianDate(getDayNoGregorian(gregorianDate) - 2431);
}
