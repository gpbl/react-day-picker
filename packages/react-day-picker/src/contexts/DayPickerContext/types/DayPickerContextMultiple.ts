import { SelectMultipleEventHandler } from 'types';
import { DayPickerContextBase } from './DayPickerContextBase';

/** Represent the value of the DayPicker context when `mode="multiple"`. */
export interface DayPickerContextMultiple extends DayPickerContextBase {
  mode: 'multiple';
  onSelect?: SelectMultipleEventHandler;
  defaultSelected?: Date[];
  min?: number;
  max?: number;
}
