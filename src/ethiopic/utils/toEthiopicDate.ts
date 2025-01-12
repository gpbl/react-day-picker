import { EthiopicDate } from "./EthiopicDate.js";
import { createEthiopianDate, getDayNoGregorian } from "./ethiopicDateUtils.js";

export function toEthiopicDate(date: Date): EthiopicDate {
  return createEthiopianDate(getDayNoGregorian(date) - 2431);
}
