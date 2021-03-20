import { SelectSingleEventHandler } from 'types';
import { DayPickerContextBase } from './DayPickerContextBase';

/** Represent the value of the DayPicker context when `mode="single"`. */
export interface DayPickerContextSingle extends DayPickerContextBase {
  mode: 'single';
  onSelect?: SelectSingleEventHandler;
  defaultSelected?: Date;
  min?: number;
}
