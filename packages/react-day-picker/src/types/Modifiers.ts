import { Matcher } from './Matcher';
import { Modifier } from './Modifier';

/**
 * Represents a matcher or an array of matchers to assign to each modifier.
 */
export type Modifiers = Record<Modifier, Matcher | Matcher[]>;
