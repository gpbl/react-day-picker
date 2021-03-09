import { SelectMultipleEventHandler } from 'types';

import { DayPickerContextBase } from './DayPickerContextBase';

export interface DayPickerContextMultiple extends DayPickerContextBase {
  mode: 'multiple';
  onSelect?: SelectMultipleEventHandler;
  defaultSelected?: Date[];
  min?: number;
  max?: number;
}
