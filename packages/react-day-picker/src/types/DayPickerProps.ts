import { DayPickerBase } from './DayPickerBase';
import { DayPickerMultiple } from './DayPickerMultiple';
import { DayPickerRange } from './DayPickerRange';
import { DayPickerSingle } from './DayPickerSingle';
import { DayPickerUncontrolled } from './DayPickerUncontrolled';

/**
 * The props for the [[DayPicker]] component.
 *
 * This type alias depends from the selection mode:
 *
 * - see [[DayPickerBase]] when no selection mode is set
 * - see [[DayPickerSingle]] when using `mode="single"`
 * - see [[DayPickerMultiple]] when using `mode="multiple"`
 * - see [[DayPickerRange]] when using `mode="range"`
 */
export type DayPickerProps =
  | DayPickerBase
  | DayPickerUncontrolled
  | DayPickerSingle
  | DayPickerMultiple
  | DayPickerRange;
