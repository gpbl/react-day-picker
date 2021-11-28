import { Matcher } from './Matchers';

/** The map of modifiers with an array of matcher. */
export type Modifiers = Record<Modifier, Matcher[]> &
  Record<InternalModifier, Matcher[]>;

/** The modifiers that are used internally in DayPicker. */
export type InternalModifier =
  | 'selected'
  | 'disabled'
  | 'hidden'
  | 'range_start'
  | 'range_end'
  | 'range_middle';

/** A _modifier_ represents different styles or states of a day displayed in the calendar. */
export type Modifier = string;

/** The status of a modifiers when matched a day. */
export type ModifierStatus = Record<Modifier, true>;

/** The inline-style to apply to the day matching `modifier`. */
export type ModifierStyles = Record<Modifier, React.CSSProperties>;

/** The classnames to assign to each modifier. */
export type ModifierClassNames = Record<Modifier, string>;

/** A map of matchers to use as custom modifiers.*/
export type CustomModifiers = Record<Modifier, Matcher | Matcher[]>;
