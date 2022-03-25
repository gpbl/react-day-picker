import { DayPickerProps } from 'DayPicker';

import { DayPickerBase } from './DayPickerBase';

/** The props for the [[DayPicker]] component when using `mode="default"` or `undefined`. */
export interface DayPickerDefaultProps extends DayPickerBase {
  mode?: 'default';
}

/** Returns true when the props are of type [[DayPickerDefault]]. */
export function isDayPickerDefault(
  props: DayPickerProps
): props is DayPickerDefaultProps {
  return props.mode === undefined || props.mode === 'default';
}
