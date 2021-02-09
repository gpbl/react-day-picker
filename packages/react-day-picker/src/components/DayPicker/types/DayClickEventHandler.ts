import { ModifiersStatus } from './ModifiersStatus';

export type DayClickEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
