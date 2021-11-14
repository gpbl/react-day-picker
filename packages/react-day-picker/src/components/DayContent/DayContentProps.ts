import { ModifierStatus } from '../../types';

/** Represent the props for the [[DayContent]] component. */
export interface DayContentProps {
  /** The date representing the day. */
  date: Date;
  /** The month where the day is displayed. */
  displayMonth: Date;
  /** The modifier status for the date. */
  modifiers: ModifierStatus;
}
