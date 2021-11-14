import { Modifiers } from '../../types';

/** Represent the modifiers that are changed by the multiple selection. */
export type SelectMultipleModifiers = Pick<Modifiers, 'selected' | 'disabled'>;
