/**
 * A modifier is a string attached to a day whose behavior and appearance is meant to be modified by it.
 */
export type DayModifier = string;

/**
 */
export type DaysClassNames = {
  [other: string]: string;
};

/**
 * Inline styles to apply to the day element having the specified modifier.
 */
export type DaysStyles = {
  [name in DayModifier]: React.CSSProperties;
};

/**
 * List the names of the default modifiers.
 */
export enum DefaultModifiersNames {
  /**
   * The day is disabled.
   */
  DISABLED = 'disabled',
  /**
   * The day is hidden.
   */
  HIDDEN = 'hidden',
  /**
   * The day is interactive.
   */
  INTERACTIVE = 'interactive',
  /**
   * The day is outside.
   */
  AFTER_MONTH = 'aftermonth',
  /**
   * The day is outside.
   */
  BEFORE_MONTH = 'beforemonth',
  /**
   * The day is selected.
   */
  SELECTED = 'selected',
  /**
   * The day is today.
   */
  TODAY = 'today'
}

/**
 * Modifiers to assign when a day is matched.
 */
export type DaysModifiers = {
  [modifier: string]: DayMatcher;
};

/**
 * A type to indicate when a day matches a modifier.
 */
export type DayMatchModifier = boolean | undefined;

/**
 * An object containing modifiers matching a specific day. Some defaults
 * modifiers are used in `DayPicker`. They can be extended using the
 * [[DayPickerProps.days]] prop.
 */
export type MatchingModifiers = {
  [name in DefaultModifiersNames | string]?: DayMatchModifier;
};

/**
 * Matches a day that is the same as the specified date.
 */
export type MatchDate = Date;

/**
 * Matches the days that are inside (but not including) the specified range.
 */
export type MatchDayInRange = { from: Date; to: Date };

/**
 * Matches the days before (but not including) the specified date.
 */
export type MatchDayBefore = { before: Date };

/**
 * Matches the days after (but not including) the specified date.
 */
export type MatchDayAfter = { after: Date };

/**
 * Matches the days between (but not including) the specified dates.
 */
export type MatchDayBetween = { after: Date; before: Date };

/**
 * Matches one or more days of the week (`0` = Sundays).
 */
export type MatchDaysOfWeek = { daysOfWeek: number[] };

/**
 * Matches any day for which this function returns a truthy value.
 */
export type MatchFunction = (date: Date) => boolean;

/**
 * Day matchers are used to find if a day matches a specific condition, like
 * being between two dates, or in a specified day of the week, etc.
 */
export type DayMatcher =
  | MatchDate
  | MatchDayInRange
  | MatchDayBetween
  | MatchDayBefore
  | MatchDayAfter
  | MatchDaysOfWeek
  | MatchFunction
  | DayMatcher[];
