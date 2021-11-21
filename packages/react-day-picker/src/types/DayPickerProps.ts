import { DayPickerBase } from './DayPickerBase';
import { DayPickerMultiple } from './DayPickerMultiple';
import { DayPickerRange } from './DayPickerRange';
import { DayPickerSingle } from './DayPickerSingle';
import { DayPickerCustom } from './DayPickerCustom';

/** Represent the props for the selection modes. */
export type DayPickerSelectionProps =
  | DayPickerRange
  | DayPickerMultiple
  | DayPickerSingle
  | DayPickerCustom;

/** The props for the [[DayPicker]] component. */
export type DayPickerProps = DayPickerBase & DayPickerSelectionProps;
