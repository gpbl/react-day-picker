import { ModifiersStatus } from './ModifiersStatus';

export type DayTouchEndHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
