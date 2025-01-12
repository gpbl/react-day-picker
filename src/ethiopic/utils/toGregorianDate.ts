import type { EthiopicDate } from "./EthiopicDate.js";
import {
  gregorianDateFromDayNo,
  getDayNoEthiopian
} from "./ethiopicDateUtils.js";

/**
 * Converts an Ethiopic date to a Gregorian date.
 *
 * @param ethiopicDate - An EthiopicDate object.
 * @returns A JavaScript Date object representing the Gregorian date.
 */
export function toGregorianDate(ethiopicDate: EthiopicDate): Date {
  return gregorianDateFromDayNo(getDayNoEthiopian(ethiopicDate) + 2431);
}
