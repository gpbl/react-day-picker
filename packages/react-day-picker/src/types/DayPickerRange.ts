import { DayPickerProps } from './DayPicker';
import { SelectRangeEventHandler } from './EventHandlers';
import { DateRange } from './Matchers';

/** The props for the [[DayPicker]] component when using `mode="range"`. */
export interface DayPickerRangeProps extends DayPickerProps {
  mode: 'range';
  /** The selected range of days. */
  selected?: DateRange;
  /** Event fired when a range (or a part of the range) is selected. */
  onSelect?: SelectRangeEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}

/** Returns true when the props are of type [[DayPickerRange]]. */
export function isDayPickerRange(
  props: DayPickerProps
): props is DayPickerRangeProps {
  return props.mode === 'range';
}
