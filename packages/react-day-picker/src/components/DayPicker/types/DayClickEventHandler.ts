import { ModifiersStatus } from './Modifiers';

export type DayClickEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
