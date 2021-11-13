import { Modifiers } from '../../types';

/** Represent the modifiers that are changed by the range selection. */
export type SelectRangeModifiers = Pick<
  Modifiers,
  'selected' | 'range_start' | 'range_end' | 'range_middle' | 'disabled'
>;
