import { DateAfter } from './DateAfter';
import { DateBefore } from './DateBefore';
import { DateBeforeAfter } from './DateBeforeAfter';
import { DateRange } from './DateRange';
import { MatchDate } from './MatchDate';
import { MatchDaysOfWeek } from './MatchDaysOfWeek';

/**
 * The matcher is a function, a date, an object or an array of them used to
 * determine if a day matches a modifier.
 */
export type Matcher =
  | boolean
  | Date
  | DateRange
  | DateBeforeAfter
  | DateBefore
  | DateAfter
  | MatchDate
  | MatchDaysOfWeek
  | Matcher[];
