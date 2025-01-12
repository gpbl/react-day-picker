import { EthiopicDate } from "./EthiopicDate";
import { gregorianDateFromDayNo, getDayNoEthiopian } from "./ethiopicDateUtils";


export function toGregorianDate(ethiopicDate: EthiopicDate): Date {
  return gregorianDateFromDayNo(getDayNoEthiopian(ethiopicDate) + 2431);
}
