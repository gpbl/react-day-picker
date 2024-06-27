import { GenericDateConstructor } from "date-fns";
import { addDays } from "date-fns/addDays.js";
import { addMonths } from "date-fns/addMonths.js";
import { addWeeks } from "date-fns/addWeeks.js";
import { addYears } from "date-fns/addYears.js";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays.js";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths.js";
import { endOfISOWeek } from "date-fns/endOfISOWeek.js";
import { endOfMonth } from "date-fns/endOfMonth.js";
import { endOfWeek } from "date-fns/endOfWeek.js";
import { endOfYear } from "date-fns/endOfYear.js";
import { format } from "date-fns/format.js";
import { getISOWeek } from "date-fns/getISOWeek.js";
import { getUnixTime } from "date-fns/getUnixTime.js";
import { getWeek } from "date-fns/getWeek.js";
import { isAfter } from "date-fns/isAfter.js";
import { isBefore } from "date-fns/isBefore.js";
import { isDate } from "date-fns/isDate.js";
import { isSameDay } from "date-fns/isSameDay.js";
import { isSameMonth } from "date-fns/isSameMonth.js";
import { isSameYear } from "date-fns/isSameYear.js";
import { max } from "date-fns/max.js";
import { min } from "date-fns/min.js";
import { setMonth } from "date-fns/setMonth.js";
import { setYear } from "date-fns/setYear.js";
import { startOfDay } from "date-fns/startOfDay.js";
import { startOfISOWeek } from "date-fns/startOfISOWeek.js";
import { startOfMonth } from "date-fns/startOfMonth.js";
import { startOfWeek } from "date-fns/startOfWeek.js";
import { startOfYear } from "date-fns/startOfYear.js";

/** @private */
export type { Locale } from "date-fns";
/** @private */
export type { FormatOptions } from "date-fns";
/** @private */
export type { Month as DateFnsMonth } from "date-fns";

/** The default date library to use with the date picker. */
export const dateLib = {
  /** The constructor of the date object. */
  Date: Date as GenericDateConstructor,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getISOWeek,
  getUnixTime,
  getWeek,
  isAfter,
  isBefore,
  isDate,
  isSameDay,
  isSameMonth,
  isSameYear,
  max,
  min,
  setMonth,
  setYear,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  startOfYear
};
