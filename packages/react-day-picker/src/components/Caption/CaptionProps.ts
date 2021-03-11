/** Represent the props of the [[Caption]] component. */
export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** The index of the month being displayed (when `numberOfMonths` set can be greater than `0`). */
  displayIndex: number;
  /** When `numberOfMonths > 0`, whether the month is placed first. */
  isFirst: boolean;
  /** When `numberOfMonths > 0`, whether the month is placed last. */
  isLast: boolean;
  /**When `numberOfMonths > 0`, whether the month is placed in middle position. */
  isMiddle: boolean;
}
