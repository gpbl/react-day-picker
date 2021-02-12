import { MatchAfter } from './MatchAfter';
import { MatchBefore } from './MatchBefore';
import { MatchDate } from './MatchDate';
import { MatchDaysOfWeek } from './MatchDaysOfWeek';
import { MatchFromTo } from './MatchFromTo';

/**
 * The matcher is a function, a date, an object or an array of them used to
 * determine if a day matches a modifier.
 */
export type Matcher =
  | Date
  | MatchDate
  | MatchFromTo
  | MatchBefore
  | MatchAfter
  | MatchDaysOfWeek
  | Matcher[];
