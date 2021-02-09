import { ModifiersStatus } from './ModifiersStatus';

/**
 * The event handler when a day is clicked.
 *
 * #### Params
 *
 * - `day` The day that has been clicked (or submitted via keyboard)
 * - `modifiers` The status of the modifiers for the given day
 * - `e` A `KeyboardEvent` when the user is navigating via keyboard and `Enter`
 *   or `Space` are pressed.
 */
export type DayClickEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent | React.KeyboardEvent
) => void;
