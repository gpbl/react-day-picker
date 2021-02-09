/**
 * The matcher is a function, a date, an object or an array of them used to
 * determine if a day matches a modifier.
 */
export type Matcher =
  | Date
  | ((date: Date) => boolean)
  | { from: Date; to: Date }
  | { before: Date }
  | { after: Date }
  | { daysOfWeek: number[] }
  | Matcher[];
