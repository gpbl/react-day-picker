import { DayPickerProps } from './DayPickerProps';

/** Matches a day when this function returns `true`. */
export type MatchDate = (
  date: Date,
  currentMonth: Date,
  props: DayPickerProps
) => boolean;
