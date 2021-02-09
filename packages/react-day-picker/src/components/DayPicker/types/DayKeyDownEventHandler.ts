import { ModifiersStatus } from './ModifiersStatus';

export type DayKeyDownEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.KeyboardEvent
) => void;
