import { InternalDayPickerProps } from 'DayPicker';

import { DayPickerBase } from './DayPickerBase';

/** The props for the {@link DayPicker} component when using `mode="default"` or `undefined`. */
export interface DayPickerDefaultProps extends DayPickerBase {
  mode?: undefined | 'default';
}

/** Returns true when the props are of type {@link DayPickerDefaultProps}. */
export function isDayPickerDefault(
  props: InternalDayPickerProps
): props is DayPickerDefaultProps {
  return props.mode === undefined || props.mode === 'default';
}
