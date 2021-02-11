import { ModifiersStatus } from './ModifiersStatus';

export type DayTouchMoveEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
