import { DayPickerProps } from 'DayPicker';

import { DayPickerBase } from './DayPickerBase';
import { SelectSingleEventHandler } from './EventHandlers';

/** The props for the [[DayPicker]] component when using `mode="single"`. */
export interface DayPickerSingleProps extends DayPickerBase {
  mode: 'single';
  /** The selected day. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: boolean;
}

/** Returns true when the props are of type [[DayPickerSingle]]. */
export function isDayPickerSingle(
  props: DayPickerProps
): props is DayPickerSingleProps {
  return props.mode === 'single';
}
