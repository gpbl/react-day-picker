import { ModifiersStatus } from './ModifiersStatus';

export type SelectMultipleEventHandler = (
  days: Date[],
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
