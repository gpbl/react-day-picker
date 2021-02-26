/**
 * Represent the status of a modifiers if matched against a day according to its
 * [[Matcher]].
 *
 * For example, the following status represent a day with the `selected` modifier.
 *
 * ```js
 * const modifiers: ModifiersStatus = {
 *  selected: true,
 * }
 * ```
 */
export type ModifierStatus = {
  [modifier: string]: boolean;
};
