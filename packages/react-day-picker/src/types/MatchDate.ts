import { DayPickerContextValue } from './DayPickerContextValue';

/** A function that returns true when `date` is matched. */
export type MatchDate = (
  date: Date,
  displayMonth: Date,
  context: DayPickerContextValue
) => boolean;
