import { DateRange, SelectRangeEventHandler } from 'types';
import { DayPickerContextBase } from './DayPickerContextBase';

/** Represent the value of the DayPicker context when `mode="range"`. */
export interface DayPickerContextRange extends DayPickerContextBase {
  mode: 'range';
  onSelect?: SelectRangeEventHandler;
  defaultSelected?: DateRange;
  min?: number;
  max?: number;
}
