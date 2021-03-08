import { SelectSingleEventHandler } from 'types';

import { ContextBase } from './ContextBase';

export interface ContextSingle extends ContextBase {
  mode: 'single';
  onSelect?: SelectSingleEventHandler;
  defaultSelected?: Date;
  min?: number;
}
