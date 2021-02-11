import { ModifiersStatus } from './ModifiersStatus';

export type DayMouseLeaveEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
