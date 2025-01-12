import type { EthiopicDate } from "./EthiopicDate.js";
import { ETHIOPIC_EPOCH_OFFSET } from "./consts.js";

/**
 * Converts an Ethiopic date to a Gregorian date.
 *
 * @param ethiopicDate - An EthiopicDate object.
 * @returns A JavaScript Date object representing the Gregorian date.
 */
export function toGregorianDate(ethiopicDate: EthiopicDate): Date {
  const yearStartJulianDay =
    365 * ethiopicDate.year +
    Math.floor(ethiopicDate.year / 4) -
    ETHIOPIC_EPOCH_OFFSET;
  const julianDay =
    yearStartJulianDay + (ethiopicDate.month - 1) * 30 + (ethiopicDate.day - 1);
  const gregorianTime = (julianDay - 2440587.5) * 86400000;
  return new Date(gregorianTime);
}
