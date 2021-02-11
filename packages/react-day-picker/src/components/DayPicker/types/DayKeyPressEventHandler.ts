import { ModifiersStatus } from './ModifiersStatus';

export type DayKeyPressEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.KeyboardEvent
) => void;
