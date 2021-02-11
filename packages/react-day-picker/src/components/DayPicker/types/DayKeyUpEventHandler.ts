import { ModifiersStatus } from './ModifiersStatus';

export type DayKeyUpEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.KeyboardEvent
) => void;
