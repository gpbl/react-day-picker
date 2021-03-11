import { DayPickerContextBase } from './DayPickerContextBase';

/** Represent the value of the DayPicker context when `mode="uncontrolled"`. */
export interface DayPickerContextUncontrolled extends DayPickerContextBase {
  mode?: 'uncontrolled';
}
