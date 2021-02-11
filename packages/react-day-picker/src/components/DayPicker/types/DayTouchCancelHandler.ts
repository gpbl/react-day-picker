import { ModifiersStatus } from './ModifiersStatus';

export type DayTouchCancelHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
