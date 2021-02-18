import { DateAfter } from './DateAfter';
import { DateBefore } from './DateBefore';
import { DateInterval } from './DateInterval';
import { DateRange } from './DateRange';
import { MatchDate } from './MatchDate';
import { MatchDaysOfWeek } from './MatchDaysOfWeek';

/**
 * The matcher is a function, a date, an object or an array of them used to
 * determine if a day matches a modifier.
 */
export type Matcher =
  | Date
  | DateRange
  | DateInterval
  | DateBefore
  | DateAfter
  | MatchDate
  | MatchDaysOfWeek
  | Matcher[];
