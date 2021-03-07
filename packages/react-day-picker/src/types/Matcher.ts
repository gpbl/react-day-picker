import { DateRange } from './DateRange';
import { DayOfWeekMatcher } from './DayOfWeekMatcher';
import { DateBefore } from './DateBefore';
import { DateAfter } from './DateAfter';
import { DateInterval } from './DateInterval';

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
  | DayOfWeekMatcher;
