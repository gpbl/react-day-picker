import { DayPickerContext } from '../contexts/DayPickerContext';
import { SelectionContext } from '../contexts/SelectionContext';

export interface ContextsAsProps {
  dayPicker: DayPickerContext;
  selection: SelectionContext;
}
