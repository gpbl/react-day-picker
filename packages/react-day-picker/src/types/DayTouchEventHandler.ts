import { ModifiersStatus } from './ModifiersStatus';

export type DayTouchEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
