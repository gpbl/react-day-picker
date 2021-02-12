import { Modifier } from './Modifier';

/**
 * Represent the status of a modifiers if matched against a day according to its
 * [[Matcher]].
 *
 * For example, the following day has the `selected` modifiers, but not `today`
 * or `custom`.
 *
 * ```js
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
