import { InternalModifier } from './InternalModifier';
import { Matcher } from './Matcher';
import { Modifier } from './Modifier';

/** Represent the map of modifiers with an array of matcher. */
export type Modifiers = Record<Modifier, Matcher[]> &
  Record<InternalModifier, Matcher[]>;
