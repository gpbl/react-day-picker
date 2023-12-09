import { ReactElement } from 'react';
import { Calendar } from './components/Calendar';
import { ContextProviders } from './contexts/ContextProviders';
import { PropsBase, Mode } from './types/PropsBase';
import { DateRange } from './types/matchers';
import { Modifiers } from './types/modifiers';

export type Selected<T extends Mode> = T extends 'single'
  ? Date
  : T extends 'multi'
    ? Date[]
    : T extends 'range'
      ? DateRange
      : Date;

/** The callback called when the user select a days from the calendar. */
export type SelectHandler<T extends 'single' | 'multi' | 'range' | 'multiple'> =
  (
    /** The new selected value. */
    selected: Selected<T> | undefined,
    /** The date that triggered the selection. */
    date: Date,
    /** The modifiers for the day that triggered the selection. */
    modifiers: Modifiers,
    /** The click event. */
    e: React.MouseEvent
  ) => void;

export interface PropsNone extends PropsBase {
  mode: 'none';
}

/** The props for the single selection mode. */
export interface PropsSingle extends PropsBase {
  /** Enable the single selection mode. */
  mode?: 'single' | undefined;
  /** Makes the selection required */
  required?: boolean;
  /** The initially selected value when not controlled. */
  defaultSelected?: Selected<'single'> | undefined;
  /** The selected value. */
  selected?: Selected<'single'> | undefined;
  /** The callback called when the user selects a day. */
  onSelect?: SelectHandler<'single'> | undefined;
}

/** The props for the multi selection mode. */
export interface PropsMulti extends PropsBase {
  /** Enable the multi selection mode. */
  mode: 'multi' | 'multiple';
  required?: boolean;
  defaultSelected?: Selected<'multi'> | undefined;
  selected?: Selected<'multi'> | undefined;
  onSelect?: SelectHandler<'multi'> | undefined;
  min?: number;
  max?: number;
}

/** The props for the range selection mode. */
export interface PropsRange extends PropsBase {
  /** Enable the range selection mode. */
  mode: 'range';
  required?: boolean;
  defaultSelected?: Selected<'range'> | undefined;
  selected?: Selected<'range'> | undefined;
  onSelect?: SelectHandler<'range'> | undefined;
  min?: number;
  max?: number;
}

export type DayPickerProps = PropsNone | PropsSingle | PropsMulti | PropsRange;

/**
 * Render a date picker component.
 *
 * @see https://react-day-picker.js.org
 */
export function DayPicker(props: DayPickerProps): ReactElement {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
