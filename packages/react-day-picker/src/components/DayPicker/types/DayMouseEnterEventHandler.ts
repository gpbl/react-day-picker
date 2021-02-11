import { ModifiersStatus } from './ModifiersStatus';

export type DayMouseEnterEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
