/**
 * Represent the value of a [[NavigationContext]].
 */
export interface NavigationContextValue {
  /** The month coming before the current one. Undefined when cannot navigate earlier months. */
  prevMonth?: Date;
  /** The month coming after the current one.  Undefined when cannot navigate later months.*/
  nextMonth?: Date;
  /** The currently displayed month or, in case of multiple months, the first of them. */
  currentMonth: Date;
  /** The months to render with DayPicker. When `numberOfMonths` is `1` contains only the `currentMonth`. */
  displayMonths: Date[];
  /** The day that should focus when rendering. Used for keyboard navigation. */
  focusedDay?: Date;
}
