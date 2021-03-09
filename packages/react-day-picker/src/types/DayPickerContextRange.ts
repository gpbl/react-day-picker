import { DateRange, SelectRangeEventHandler } from 'types';

import { DayPickerContextBase } from './DayPickerContextBase';

export interface DayPickerContextRange extends DayPickerContextBase {
  mode: 'range';
  onSelect?: SelectRangeEventHandler;
  defaultSelected?: DateRange;
  min?: number;
  max?: number;
}
