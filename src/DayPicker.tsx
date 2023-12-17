import { Calendar } from './components/Calendar';
import { ContextProviders } from './contexts/ContextProviders';
import type {
  PropsBase,
  Mode,
  PropsSelection,
  PropsMulti,
  PropsNone,
  PropsRange,
  PropsSingle
} from './types/props';

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
 * Render a date picker component.
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
