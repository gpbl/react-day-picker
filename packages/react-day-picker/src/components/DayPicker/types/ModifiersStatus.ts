import { Modifier } from './Modifier';

/**
 * The status of a modifiers if matched against a day according to its
 * [[Matcher]].
 *
 * For example, the following day has the `selected` modifiers, but not `today`
 * or `custom`.
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
