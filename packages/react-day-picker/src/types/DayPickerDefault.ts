import { DayPickerProps } from 'DayPicker';

import { DayPickerBase, DaySelectionMode } from './DayPickerBase';

/** The props for the {@link DayPicker} component when using `mode="default"` or `undefined`. */
export interface DayPickerDefaultProps extends DayPickerBase {
  mode?: DaySelectionMode;
}

/** Returns true when the props are of type {@link DayPickerDefaultProps}. */
export function isDayPickerDefault(
  props: DayPickerProps
): props is DayPickerDefaultProps {
  return props.mode === undefined || props.mode === 'default';
}
