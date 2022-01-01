import { Matcher } from './Matchers';

/** Map of modifiers and an array of matcher. */
export type Modifiers = Record<Modifier, Matcher[]> &
  Record<InternalModifier, Matcher[]>;

/** The modifiers that are used internally by DayPicker. */
export enum InternalModifier {
  /** Name of the modifier applied to the disabled days, using the `disabled` prop. */
  Disabled = 'disabled',
  /** Name of the modifier applied to the selected days using the `selected` prop). */
  Selected = 'selected',
  /** Name of the modifier applied to the hidden days using the `hidden` prop). */
  Hidden = 'hidden',
  /** Name of the modifier applied to the day specified using the `today` prop). */
  Today = 'today',
  /** The modifier applied to the day starting a selected range, when in range selection mode.  */
  RangeStart = 'range_start',
  /** The modifier applied to the day ending a selected range, when in range selection mode.  */
  RangeEnd = 'range_end',
  /** The modifier applied to the days between the start and the end of a selected range, when in range selection mode.  */
  RangeMiddle = 'range_middle'
}

/** Map of matchers used for the internal modifiers. */
export type InternalModifiers = Record<InternalModifier, Matcher[]>;

/** A _modifier_ represents different styles or states of a day displayed in the calendar. */
export type Modifier = string;

/** The status of a modifiers when matched a day. */
export type ModifiersStatus = Record<Modifier, true> &
  Partial<Record<InternalModifier, true>>;

/** The inline-style to apply to the day matching `modifier`. */
export type ModifiersStyles = Record<Modifier, React.CSSProperties> &
  Partial<Record<InternalModifier, React.CSSProperties>>;

/** The classnames to assign to each modifier. */
export type ModifiersClassNames = Record<Modifier, string> &
  Partial<Record<InternalModifier, string>>;

/** The custom modifiers passed to the [[DayPickerProps.modifiers]]. */
export type DayModifiers = Record<Modifier, Matcher | Matcher[]>;

/**
 * A map of matchers used as custom modifiers by DayPicker component. This is
 * the same as [[DayModifiers]], but it accepts only array of [[Matcher]]s.
 */
export type CustomModifiers = Record<Modifier, Matcher[]>;
