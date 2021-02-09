import { Modifier } from './Modifier';

export type ModifiersStyles = {
  [modifier in Modifier]: React.CSSProperties;
};
