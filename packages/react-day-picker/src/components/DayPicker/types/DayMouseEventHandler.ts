import { ModifiersStatus } from './ModifiersStatus';

export type DayMouseEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
