import { EthiopicDate } from "./EthiopicDate.js";
import {
  gregorianDateFromDayNo,
  getDayNoEthiopian
} from "./ethiopicDateUtils.js";

export function toGregorianDate(ethiopicDate: EthiopicDate): Date {
  return gregorianDateFromDayNo(getDayNoEthiopian(ethiopicDate) + 2431);
}
