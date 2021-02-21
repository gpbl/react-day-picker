/**
 * Represent the event handler when a month is changed in the calendar.
 */
export type MonthChangeEventHandler = (
  month: Date,
  e:
    | React.MouseEvent
    | React.KeyboardEvent
    | React.FocusEvent
    | React.ChangeEvent
) => void;
