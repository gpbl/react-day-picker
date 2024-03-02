import type { CSSProperties } from "react";

import type { CalendarDay } from "../classes/CalendarDay";

/**
 * The name of the modifiers that are used internally by DayPicker.
 *
 * @deprecated Test deprecation message.
 */
export type InternalModifier =
  | "disabled"
  | "excluded"
  | "focusable"
  | "hidden"
  | "outside"
  | "range_end"
  | "range_middle"
  | "range_start"
  | "selected"
  | "today";

/** A map of modifiers with the days. */
export type ModifiersMap = Record<string, CalendarDay[]> &
  Record<InternalModifier, CalendarDay[]>;

/** The modifiers that are matching a day in the calendar. */
export type Modifiers = Record<string, boolean> &
  Record<InternalModifier, boolean>;

/** The style to apply to each day element matching a modifier. */
export type ModifiersStyles = Record<string, CSSProperties> &
  Partial<Record<InternalModifier, CSSProperties>>;

/** The classnames to assign to each day element matching a modifier. */
export type ModifiersClassNames = Record<string, string> &
  Partial<Record<InternalModifier, string>>;
