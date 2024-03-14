import { DayPickerProps } from '../DayPicker';

import { DayPickerContextValue } from '../contexts/DayPicker';

import { SelectSingleEventHandler } from './events';
import { PropsBase } from './PropsBase';

/** The props for the single selection mode. */
export interface PropsSingle extends PropsBase {
  mode: 'single';
  /** The selected day. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: boolean;
}

/** Returns true when the props are of type {@link PropsSingle}. */
export function isDayPickerSingle(
  props: DayPickerProps | DayPickerContextValue
): props is PropsSingle {
  return props.mode === 'single';
}

/** @deprecated Use {@link PropsSingle} instead. */
export type DayPickerSingleProps = PropsSingle;
