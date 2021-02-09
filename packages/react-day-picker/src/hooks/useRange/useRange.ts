import { useState } from 'react';
import { DaysRange } from './types/DaysRange';
import { addToRange } from './addToRange';

const emptyRange: DaysRange = { from: undefined, to: undefined };

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
