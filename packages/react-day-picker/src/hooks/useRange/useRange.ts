import { useState } from 'react';

import { DaysRange } from '../../types/DaysRange';
import { addToRange } from './addToRange';

const emptyRange: DaysRange = { from: undefined, to: undefined };

/**
 * Returns a range and a state setter for handing ranges when selecting dates.
 *
 * **Example**
 *
 * ```jsx showOutput open=false
 * function Example() {
 *   const [range, setRange] = useRange();
 *   return <DayPicker onDayClick={setRange} selected={range} />;
 * }
 * ```
 */
export function useRange(
  initialRange = emptyRange
): [DaysRange, (day: Date) => void] {
  const [range, setInternalRange] = useState<DaysRange>(initialRange);

  const setRange = (day: Date) => {
    if (!day) {
      setInternalRange(emptyRange);
    } else {
      setInternalRange(addToRange(range, day));
    }
    return;
  };

  return [range, setRange];
}
