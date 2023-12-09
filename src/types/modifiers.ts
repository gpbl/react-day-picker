import { CSSProperties } from 'react';

/** The name of the modifiers that are used internally by DayPicker. */
export type InternalModifier =
  | 'outside'
  | 'disabled'
  | 'selected'
  | 'excluded'
  | 'hidden'
  | 'today'
  | 'range_start'
  | 'range_end'
  | 'range_middle';

/** The modifiers that are matching a day in the calendar. */
export type Modifiers = Record<string, boolean> &
  Record<InternalModifier, boolean>;

/** The style to apply to each day element matching a modifier. */
export type ModifiersStyles = Record<string, CSSProperties> &
  Partial<Record<InternalModifier, CSSProperties>>;

/** The classnames to assign to each day element matching a modifier. */
export type ModifiersClassNames = Record<string, string> &
  Partial<Record<InternalModifier, string>>;
