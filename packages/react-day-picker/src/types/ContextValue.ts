import { ContextMultiple } from './ContextMultiple';
import { ContextRange } from './ContextRange';
import { ContextSingle } from './ContextSingle';
import { ContextUncontrolled } from './ContextUncontrolled';

export type ContextValue =
  | ContextUncontrolled
  | ContextSingle
  | ContextMultiple
  | ContextRange;
