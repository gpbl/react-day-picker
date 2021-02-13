import { ModifiersStatus } from './ModifiersStatus';

export type DayFocusEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.FocusEvent | React.KeyboardEvent
) => void;
