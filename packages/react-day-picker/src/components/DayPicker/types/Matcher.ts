export type Matcher =
  | Date
  | { from: Date; to: Date }
  | { before: Date }
  | { after: Date }
  | { daysOfWeek: number[] }
  | ((date: Date) => boolean)
  | Matcher[];
