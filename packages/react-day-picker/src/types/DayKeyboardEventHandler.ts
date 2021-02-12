import { ModifiersStatus } from './ModifiersStatus';

export type DayKeyboardEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.KeyboardEvent
) => void;
