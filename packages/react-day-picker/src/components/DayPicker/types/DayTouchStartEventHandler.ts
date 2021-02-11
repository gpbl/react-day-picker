import { ModifiersStatus } from './ModifiersStatus';

export type DayTouchStartEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
