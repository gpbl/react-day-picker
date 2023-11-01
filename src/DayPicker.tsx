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
export type SelectHandler<T extends Mode> = (
  /** The new selected value. */
  selected: Selected<T> | undefined,
  /** The day that triggered the selection. */
  day: Date,
  /** The modifiers for the day that triggered the selection. */
  modifiers: Modifiers,
  e: React.MouseEvent
) => void;

export interface PropsDefault {
  selected?: never;
  required?: never;
  mode?: never;
  onSelect?: never;
}

/** The props for the single selection mode. */
export interface PropsSingle {
  /** Enable the single selection mode. */
  mode: 'single';
  required?: boolean;
  selected?: Selected<'single'> | undefined;
  onSelect?: SelectHandler<'single'> | undefined;
}

/** The props for the multi selection mode. */
export interface PropsMulti {
  /** Enable the multi selection mode. */
  mode: 'multi';
  required?: boolean;
  selected?: Selected<'multi'> | undefined;
  onSelect?: SelectHandler<'multi'> | undefined;
  min?: number;
  max?: number;
}

/** The props for the range selection mode. */
export interface PropsRange {
  /** Enable the range selection mode. */
  mode: 'range';
  required?: boolean;
  selected?: Selected<'range'> | undefined;
  onSelect?: SelectHandler<'range'> | undefined;
  min?: number;
  max?: number;
}

export type DayPickerProps = PropsBase &
  (PropsDefault | PropsSingle | PropsMulti | PropsRange);

/**
 * Render a date picker component.
 *
 * @see https://react-day-picker.js.org
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
