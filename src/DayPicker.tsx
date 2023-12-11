import { FunctionComponent } from 'react';
import { Calendar } from './components/Calendar';
import { ContextProviders } from './contexts/ContextProviders';
import { PropsBase, Mode, PropsSelection } from './types/PropsBase';
import { DateRange } from './types/matchers';
import { Modifiers } from './types/modifiers';

export type Selected<T extends Mode> = T extends 'single'
  ? Date
  : T extends 'multi'
    ? Date[]
    : T extends 'range'
      ? DateRange
      : undefined;

/** The callback called when the user select a days from the calendar. */
export type SelectHandler<T extends Mode> = (
  /** The new selected value. */
  selected: Selected<T>,
  /** The date that triggered the selection. */
  date: Date,
  /** The modifiers for the day that triggered the selection. */
  modifiers: Modifiers,
  /** The click event. */
  e: React.MouseEvent
) => void;

export interface PropsNone {
  selected?: undefined;
  onSelect?: undefined;
}

/** The props for the single selection mode. */
export interface PropsSingle {
  /** Makes the selection required */
  required?: boolean;
}

/** The props for the multi selection mode. */
export interface PropsMulti {
  required?: boolean;
  min?: number;
  max?: number;
}

/** The props for the range selection mode. */
export interface PropsRange {
  required?: boolean;
  min?: number;
  max?: number;
}

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
export const DayPicker = <T extends Mode = 'single'>(
  props: DayPickerProps<T>
) => {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
};
