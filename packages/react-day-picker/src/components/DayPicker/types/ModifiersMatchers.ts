import { Matcher } from './Matcher';
import { Modifier } from './Modifiers';

/**
 * Matchers assigned to each modifier.
 *
 * #### Example
 *
 * ```
 * const matchers = {
 *  booked: new Date(), // matches today
 *  selected: { from: new Date() } // matches from today
 *  ...
 * }
 * ```
 */
export type ModifiersMatchers = {
  [modifier in Modifier]: Matcher;
};
