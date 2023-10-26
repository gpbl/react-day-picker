import { Calendar } from './components/Calendar';
import { ContextProviders } from './contexts/ContextProviders';
import { PropsBase, Mode } from './types/PropsBase';
import { DateRange, Matcher } from './types/matchers';
import { Modifiers } from './types/modifiers';

export type Selected<T extends Mode> = T extends 'single'
  ? Date
  : T extends 'multi'
  ? Date[]
  : T extends 'range'
  ? DateRange
  : Date;

export type SelectHandler<T extends Mode> = (
  selected: Selected<T> | undefined,
  day: Date,
  modifiers: Modifiers,
  e: React.MouseEvent
) => void;

export type SelectHandlerRequired<T extends Mode> = (
  selected: Selected<T>,
  day: Date,
  modifiers: Modifiers,
  e: React.MouseEvent
) => void;

export interface PropsDefault {
  selected?: Matcher | Matcher[] | undefined;
  required?: never;
  mode?: never;
  onSelect?: never;
}
export interface PropsSingle {
  mode: 'single';
  required?: boolean;
  selected?: Selected<'single'> | undefined;
  onSelect?: SelectHandler<'single'> | undefined;
}

export interface PropsMulti {
  mode: 'multi';
  required?: boolean;
  selected?: Selected<'multi'> | undefined;
  onSelect?: SelectHandler<'multi'> | undefined;
  min?: number;
  max?: number;
}

export interface PropsRange {
  mode: 'range';
  required?: boolean;
  selected?: Selected<'range'> | undefined;
  onSelect?: SelectHandler<'range'> | undefined;
  min?: number;
  max?: number;
}

export type DayPickerProps = PropsBase &
  (PropsDefault | PropsSingle | PropsMulti | PropsRange);

export function DayPicker(props: DayPickerProps): JSX.Element {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}
