import { EthiopicDate } from "./EthiopicDate";
import { createEthiopianDate, getDayNoGregorian } from "./ethiopicDateUtils";


export function toEthiopicDate(date: Date): EthiopicDate {
  return createEthiopianDate(getDayNoGregorian(date) - 2431);
}
