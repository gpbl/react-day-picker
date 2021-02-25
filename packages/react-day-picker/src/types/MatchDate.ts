import { DayPickerProps } from './DayPickerProps';

/** A function that returns true when `date` is matched. */
export type MatchDate = (
  date: Date,
  displayMonth?: Date,
  props?: DayPickerProps
) => boolean;
