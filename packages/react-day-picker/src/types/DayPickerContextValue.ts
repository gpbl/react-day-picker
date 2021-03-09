import { DayPickerContextMultiple } from './DayPickerContextMultiple';
import { DayPickerContextRange } from './DayPickerContextRange';
import { DayPickerContextSingle } from './DayPickerContextSingle';
import { DayPickerContextUncontrolled } from './DayPickerContextUncontrolled';

export type DayPickerContextValue =
  | DayPickerContextUncontrolled
  | DayPickerContextSingle
  | DayPickerContextMultiple
  | DayPickerContextRange;
