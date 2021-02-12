import { Modifier } from './Modifier';

/**
 * Represent the classnames to assign to each modifier.
 */
export type ModifiersClassNames = {
  [modifier in Modifier]: string;
};
