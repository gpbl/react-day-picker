import { ModifierStatus } from './Modifiers';

/** Represent the event handler when selecting a single day. */
export interface SelectSingleEventHandler {
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
