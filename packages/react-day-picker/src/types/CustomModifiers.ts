import { Matcher } from './Matchers';
import { Modifier } from './Modifier';

/** A map of matchers to use as custom modifiers.*/
export type CustomModifiers = Record<Modifier, Matcher | Matcher[]>;
