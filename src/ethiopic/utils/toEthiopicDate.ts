import type { EthiopicDate } from "./EthiopicDate.js";
import { ETHIOPIC_EPOCH_OFFSET } from "./consts.js";

/**
 * Converts a Gregorian date to an Ethiopic date.
 *
 * @param gregorianDate - A JavaScript Date object representing the Gregorian
 *   date.
 * @returns An EthiopicDate object.
 */
export function toEthiopicDate(gregorianDate: Date): EthiopicDate {
  const julianDay = Math.floor(gregorianDate.getTime() / 86400000 + 2440587.5);
  const ethiopicDayNumber = julianDay + ETHIOPIC_EPOCH_OFFSET;

  const year = Math.floor((4 * ethiopicDayNumber + 1463) / 1461);
  const dayOfYear = ethiopicDayNumber - (365 * year + Math.floor(year / 4));
  const month = Math.floor(dayOfYear / 30) + 1;
  const day = (dayOfYear % 30) + 1;

  return { year, month, day };
}
