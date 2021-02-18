import { useEffect } from 'react';

import {
  DateRange,
  DateSelection,
  DayClickEventHandler,
  ModifiersMatchers,
  SelectEventHandler,
  SelectionOptions,
  SelectionType
} from '../../types';
import { useMultipleSelection } from '../useMultipleSelection/useMultipleSelection';
import { useRangeSelection } from '../useRangeSelection';
import { useSingleSelection } from '../useSingleSelection/useSingleSelection';

export type UseSelection = [
  selection: DateSelection | undefined,
  handleClick: DayClickEventHandler,
  modifiers: ModifiersMatchers,
  reset: () => void
];

export function useSelection(
  initialSelection?: DateSelection,
  type: SelectionType = 'single',
  onSelect?: SelectEventHandler,
  options: SelectionOptions = { required: false }
): UseSelection {
  let initialRange: DateRange | undefined;
  let initialMultiple: Date[] | undefined;
  let initialSingle: Date | undefined;

  switch (type) {
    case 'range':
      initialRange = initialSelection as DateRange;
      break;
    case 'multiple':
      initialMultiple = initialSelection as Date[];
      break;
    case 'single':
    default:
      initialSingle = initialSelection as Date;
  }
  const [range, setRange, resetRange] = useRangeSelection(
    initialRange,
    onSelect,
    options
  );
  const [multiple, setMultiple, resetMultiple] = useMultipleSelection(
    initialMultiple,
    onSelect,
    options
  );
  const [single, setSingle, resetSingle] = useSingleSelection(
    initialSingle,
    onSelect,
    options
  );

  const reset = () => {
    resetRange();
    resetMultiple();
    resetSingle();
  };
  useEffect(reset, [type, options.required]);

  const modifiers: ModifiersMatchers = {};
  switch (type) {
    case 'range':
      if (range && range.from) {
        modifiers.from = range.from;
      }
      if (range && range.to) {
        modifiers.to = range.to;
      }
      if (range && range.to && range.from) {
        modifiers.between = {
          after: range.from,
          before: range.to
        };
      }
      return [range, setRange, modifiers, resetRange];
    case 'multiple':
      return [multiple, setMultiple, modifiers, resetMultiple];
    case 'single':
    default:
      return [single, setSingle, modifiers, resetSingle];
  }
}
