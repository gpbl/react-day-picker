import { Calendar } from './components/Calendar';
import { ContextProviders } from './contexts/ContextProviders';
import type {
  Mode,
  PropsBase,
  PropsMulti,
  PropsNone,
  PropsRange,
  PropsSelection,
  PropsSingle
} from './types/props';

import './style.css';

/**
 * Defines the props accepted by the {@link DayPicker} component.
 *
 * @see https://react-day-picker.dev/api/daypickerprops
 */
export type DayPickerProps<T extends Mode = 'single'> = PropsBase &
  PropsSelection<T> &
  (T extends 'single'
    ? PropsSingle
    : T extends 'multi'
      ? PropsMulti
      : T extends 'range'
        ? PropsRange
        : PropsNone);

/**
 * Render the date picker component.
 *
 * @see https://react-day-picker.js.org
 */
export function DayPicker<T extends Mode = 'single'>(props: DayPickerProps<T>) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
