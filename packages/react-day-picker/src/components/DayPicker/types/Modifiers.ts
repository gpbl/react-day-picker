import { DefaultModifier } from './DefaultModifier';

/**
 * A property that is assigned to a day according to its [[Matcher]].
 */
export type Modifier = DefaultModifier | string;

/**
 * Describe if a modifiers is matched by a day according to its [[Matcher]].
 *
 * ```
 * const modifiers: ModifiersStatus = {
 *  today: false,
 *  selected: true,
 *  custom: false,
 * }
 * ```
 */
export type ModifiersStatus = {
  [modifier in Modifier]?: boolean | undefined;
};

/**
 * The CSS class names to assign to each day cell when
 */
export type ModifiersClassNames = {
  [modifier in Modifier]: string;
};

/**
 * Inline styles to apply to the day element having the specified modifier.
 */
export type ModifiersStyles = {
  [modifier in Modifier]: React.CSSProperties;
};
