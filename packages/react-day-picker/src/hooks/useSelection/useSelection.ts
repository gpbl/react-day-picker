import { useEffect } from 'react';

import {
  DateRange,
  DateSelection,
  DayClickEventHandler,
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

  switch (type) {
    case 'range':
      return [range, setRange, resetRange];
    case 'multiple':
      return [multiple, setMultiple, resetMultiple];
    case 'single':
    default:
      return [single, setSingle, resetSingle];
  }
}
