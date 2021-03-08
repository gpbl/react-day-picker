import { DateRange, SelectRangeEventHandler } from 'types';

import { ContextBase } from './ContextBase';

export interface ContextRange extends ContextBase {
  mode: 'range';
  onSelect?: SelectRangeEventHandler;
  defaultSelected?: DateRange;
  min?: number;
  max?: number;
}
