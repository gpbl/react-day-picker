import { SelectMultipleEventHandler } from 'types';

import { ContextBase } from './ContextBase';

export interface ContextMultiple extends ContextBase {
  mode: 'multiple';
  onSelect?: SelectMultipleEventHandler;
  defaultSelected?: Date[];
  min?: number;
  max?: number;
}
