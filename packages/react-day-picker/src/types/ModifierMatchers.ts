import { Matcher } from './Matcher';

/**
 * Represents the [[Matcher]] assigned to each modifier.
 *
 * **Example**
 *
 * ```
 * const matchers = {
 *  booked: new Date(), // matches today
 *  selected: { from: new Date() } // matches from today
 *  ...
 * }
 * ```
 */
export type ModifierMatchers = {
  [modifier: string]: Matcher;
};
