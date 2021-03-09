import { DateAfter } from './DateAfter';
import { DateBefore } from './DateBefore';
import { DateInterval } from './DateInterval';
import { DateRange } from './DateRange';
import { DayOfWeek } from './DayOfWeekMatcher';

/**
 * A `Matcher` is a function, a date, an object, or an array of them used to
 * determine if a day matches a modifier.
 */
export type Matcher =
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;
