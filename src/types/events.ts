import type { Modifiers } from './modifiers';

/** @category Event Handlers */
export type DayEventHandler<T> = (
  /** The date that has triggered the event. */
  date: Date,
  /** The modifiers belonging to the date. */
  modifiers: Modifiers,
  /** The DOM event that triggered this event. */
  e: T
) => void;

/**
 * The event handler when a day is clicked.
 *
 * @deprecated Use {@link DayMouseEventHandler} instead.
 * @category Event Handlers
 */
export type DayClickEventHandler = DayEventHandler<React.MouseEvent>;

/**
 * The event handler when a day is focused.
 *
 * @category Event Handlers
 */
export type DayFocusEventHandler = DayEventHandler<
  React.FocusEvent | React.KeyboardEvent
>;

/**
 * The event handler when a day gets a keyboard event.
 *
 * @category Event Handlers
 */
export type DayKeyboardEventHandler = DayEventHandler<React.KeyboardEvent>;

/**
 * The event handler when a day gets a mouse event.
 *
 * @category Event Handlers
 */
export type DayMouseEventHandler = DayEventHandler<React.MouseEvent>;

/**
 * The event handler when a day gets a pointer event.
 *
 * @category Event Handlers
 */
export type DayPointerEventHandler = DayEventHandler<React.PointerEvent>;

/**
 * The event handler when a month is changed in the calendar.
 *
 * @category Event Handlers
 */
export type MonthChangeEventHandler = (month: Date) => void;

/**
 * The event handler when the week number is clicked.
 *
 * @category Event Handlers
 */
export type WeekNumberClickEventHandler = (
  /** The week number that has been clicked. */
  weekNumber: number,
  /** The dates in the clicked week. */
  dates: Date[],
  /** The mouse event that triggered this event. */
  e: React.MouseEvent
) => void;

/**
 * The event handler when a day gets a touch event.
 *
 * @category Event Handlers
 */
export type DayTouchEventHandler = DayEventHandler<React.TouchEvent>;
