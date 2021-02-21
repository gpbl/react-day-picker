import { UIElement } from './UIElement';

/** Represent the inline styles used for each [[UIElement]]. */
export type Styles = {
  [element in UIElement]?: React.CSSProperties;
};
