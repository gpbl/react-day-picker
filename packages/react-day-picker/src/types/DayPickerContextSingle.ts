import { SelectSingleEventHandler } from 'types';

import { DayPickerContextBase } from './DayPickerContextBase';

export interface DayPickerContextSingle extends DayPickerContextBase {
  mode: 'single';
  onSelect?: SelectSingleEventHandler;
  defaultSelected?: Date;
  min?: number;
}
