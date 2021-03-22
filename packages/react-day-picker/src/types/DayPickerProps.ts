import { DayPickerBase } from './DayPickerBase';
import { DayPickerMultiple } from './DayPickerMultiple';
import { DayPickerRange } from './DayPickerRange';
import { DayPickerSingle } from './DayPickerSingle';
import { DayPickerUncontrolled } from './DayPickerUncontrolled';

/** Represent the props for the selection modes. */
export type DayPickerSelectionProps =
  | DayPickerRange
  | DayPickerMultiple
  | DayPickerSingle
  | DayPickerUncontrolled;

/** The props for the [[DayPicker]] component. */
export type DayPickerProps = DayPickerBase & DayPickerSelectionProps;
