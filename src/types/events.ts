import { MouseEvent, TouchEvent } from "react";

import { DateRange } from "./Matchers";
import { ActiveModifiers } from "./Modifiers";

export type DayEventHandler<T> = (
  /** The date that has triggered the event. */
  date: Date,
  /** The modifiers belonging to the date. */
  modifiers: ActiveModifiers,
  /** The DOM event that triggered this event. */
  e: T
) => void;

/**
 * The event handler when a day is clicked.
 *
 * @deprecated Use {@link DayMouseEventHandler} instead.
 */
export type DayClickEventHandler = DayEventHandler<React.MouseEvent>;

/** The event handler when a day is focused. */
export type DayFocusEventHandler = DayEventHandler<
  React.FocusEvent | React.KeyboardEvent
>;

/** The event handler when a day gets a keyboard event. */
export type DayKeyboardEventHandler = DayEventHandler<React.KeyboardEvent>;

/** The event handler when a day gets a mouse event. */
export type DayMouseEventHandler = DayEventHandler<React.MouseEvent>;

/** The event handler when a day gets a pointer event. */
export type DayPointerEventHandler = DayEventHandler<React.PointerEvent>;

/** The event handler when a month is changed in the calendar. */
export type MonthChangeEventHandler = (month: Date) => void;

/** The event handler when selecting multiple days. */
export type SelectMultipleEventHandler = (
  /** The selected days */
  days: Date[] | undefined,
  /** The day that was clicked triggering the event. */
  selectedDay: Date,
  /** The day that was clicked */
  activeModifiers: ActiveModifiers,
  /** The mouse event that triggered this event. */
  e: MouseEvent
) => void;

/** The event handler when selecting a range of days. */
export type SelectRangeEventHandler = (
  /** The current range of the selected days. */
  range: DateRange | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  activeModifiers: ActiveModifiers,
  e: MouseEvent
) => void;

/** The event handler when selecting a single day. */
export type SelectSingleEventHandler = (
  /**
   * The selected day, `undefined` when `required={false}` (default) and the day
   * is clicked again.
   */
  day: Date | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  activeModifiers: ActiveModifiers,
  e: MouseEvent
) => void;

/** The event handler when the week number is clicked. */
export type WeekNumberClickEventHandler = (
  /** The week number that has been clicked. */
  weekNumber: number,
  /** The dates in the clicked week. */
  dates: Date[],
  /** The mouse event that triggered this event. */
  e: MouseEvent
) => void;

/** The event handler when a day gets a touch event. */
export type DayTouchEventHandler = (
  day: Date,
  activeModifiers: ActiveModifiers,
  e: TouchEvent
) => void;
