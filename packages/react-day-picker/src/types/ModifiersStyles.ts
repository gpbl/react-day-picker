import { Modifier } from './Modifier';

/**
 * Represent the inline-style assigned to each modifier.
 */
export type ModifiersStyles = {
  [modifier in Modifier]: React.CSSProperties;
};
