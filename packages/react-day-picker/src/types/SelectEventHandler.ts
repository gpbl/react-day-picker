import { ModifierStatus } from './ModifierStatus';

/**
 * Represent the event handler when a day is selected (undefined when the day is unselected).
 */
export interface SelectEventHandler {
  (
    /** The selected day, `undefined` when `required={false}` (default) and the day is clicked again. */
    day: Date | undefined,
    /** The day that was selected (or clicked) triggering the event. */
    selectedDay: Date,
    /** The modifiers of the selected day. */
    modifiers: ModifierStatus,
    e: React.MouseEvent
  ): void;
}
