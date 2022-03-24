import { DayPickerProps } from 'DayPicker';

import { DayPickerBase } from './DayPickerBase';

/** The props for the [[DayPicker]] component when using `mode="custom"`. */
export interface DayPickerDefaultProps extends DayPickerBase {
  mode?: 'default';
  /** Use `onDayClick` and related events instead. */
  onSelect: never;
}

/** Returns true when the props are of type [[DayPickerDefault]]. */
export function isDayPickerDefault(
  props: DayPickerProps
): props is DayPickerDefaultProps {
  return props.mode === undefined;
}
