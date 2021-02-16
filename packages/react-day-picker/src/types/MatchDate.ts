import { DayPickerContextValue } from 'components';

/** Matches a day when this function returns `true`. */
export type MatchDate = (
  date: Date,
  currentMonth: Date,
  context: DayPickerContextValue
) => boolean;
