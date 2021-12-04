import { DayPickerProps } from './DayPicker';
import {
  SelectSingleEventHandler,
  SelectSingleRequiredEventHandler
} from './EventHandlers';

export interface DayPickerSingleRequiredProps extends DayPickerProps {
  mode: 'single';
  /** The selected day. */
  selected: Date;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleRequiredEventHandler;
  /** Make the selection required. */
  required: true;
}

/** The props for the [[DayPicker]] component when using `mode="single"`. */
export interface DayPickerSingleProps extends DayPickerProps {
  mode: 'single';
  /** The selected day. */
  selected?: Date;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: false;
}

/** Returns true when the props are of type [[DayPickerSingle]]. */
export function isDayPickerSingle(
  props: DayPickerProps
): props is DayPickerSingleProps {
  return props.mode === 'single';
}
