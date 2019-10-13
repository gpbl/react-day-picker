import { MatchingModifiers } from './Modifiers';
import { DayPickerProps } from './DayPicker';

export interface DayProps {
  day: Date;
  modifiers: MatchingModifiers;
  dayPickerProps: DayPickerProps;
}
