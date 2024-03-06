import { type DayPickerProps } from '../DayPicker';
import { type PropsBase } from './PropsBase';

/**
 * The props for the {@link DayPicker} component when using `mode="default"` or
 * `undefined`.
 */
export interface PropsDefault extends PropsBase {
  mode?: undefined | 'default';
}

/** @deprecated Use {@link PropsDefault} instead. */
export type DayPickerDefaultProps = PropsDefault;

/** Returns true when the props are of type {@link PropsDefault}. */
export function isDayPickerDefault(
  props: DayPickerProps
): props is PropsDefault {
  return props.mode === undefined || props.mode === 'default';
}
