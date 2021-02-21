/**
 * Represent the event handler when the week number is clicked.
 */
export type WeekNumberClickEventHandler = (
  /** The week number that has been clicked. */
  weekNumber: number,
  /** The dates in the clicked week. */
  dates: Date[],
  e: React.MouseEvent
) => void;
