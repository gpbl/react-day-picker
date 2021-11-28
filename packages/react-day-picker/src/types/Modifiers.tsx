import { Matcher } from './Matchers';

/** Represent the map of modifiers with an array of matcher. */
export type Modifiers = Record<Modifier, Matcher[]> &
  Record<InternalModifier, Matcher[]>;

/** Represent the modifiers that are used internally in DayPicker. */
export type InternalModifier =
  | 'selected'
  | 'disabled'
  | 'hidden'
  | 'range_start'
  | 'range_end'
  | 'range_middle';

/**
 * A _modifier_ represents different styles or states of a day displayed in the
 * calendar.
 **/
export type Modifier = string;

/**
 * Represent the status of a modifiers when matched a day.
 */
export type ModifierStatus = Record<Modifier, true>;

/** The inline-style to apply to the day matching `modifier`. */
export type ModifierStyles = Record<Modifier, React.CSSProperties>;

/**
 * Represent the classnames to assign to each modifier.
 */
export type ModifierClassNames = Record<Modifier, string>;
/** A map of matchers to use as custom modifiers.*/
export type CustomModifiers = Record<Modifier, Matcher | Matcher[]>;
