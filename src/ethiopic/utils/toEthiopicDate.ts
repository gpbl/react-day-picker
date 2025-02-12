import { differenceInCalendarDays } from "date-fns";

import { EthiopicDate } from "./EthiopicDate.js";

/**
 * Calculates the number of days between January 1, 0001 and the given date.
 *
 * @param date - A JavaScript Date object to calculate days from
 * @returns The number of days since January 1, 0001. Returns 0 if the input is
 *   not a valid Date.
 */
export function getDayNoGregorian(date: Date): number {
  if (!(date instanceof Date)) {
    return 0;
  }
  // Create the start date as January 1, 0001.
  // Using an ISO string avoids issues with the Date constructor and two-digit years.
  const adStart = new Date("0001-01-01");

  // Calculate the number of days between the two dates, then add 1.
  const dayNumber = differenceInCalendarDays(date, adStart) + 1;

  return dayNumber;
}

function createEthiopicDate(dn: number): EthiopicDate {
  const num = Math.floor(dn / 1461);
  const num2 = dn % 1461;
  const num3 = Math.floor(num2 / 365);
  const num4 = num2 % 365;
  if (num2 !== 1460) {
    return {
      year: num * 4 + num3,
      month: Math.floor(num4 / 30) + 1,
      day: (num4 % 30) + 1
    };
  } else {
    return {
      year: num * 4 + num3 - 1,
      month: 13,
      day: 6
    };
  }
}

/**
 * Converts a Gregorian date to an Ethiopic date.
 *
 * @param gregorianDate - A JavaScript Date object representing the Gregorian
 *   date.
 * @returns An EthiopicDate object.
 */
export function toEthiopicDate(gregorianDate: Date): EthiopicDate {
  return createEthiopicDate(getDayNoGregorian(gregorianDate) - 2431);
}
