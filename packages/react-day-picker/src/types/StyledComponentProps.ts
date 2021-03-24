import * as React from 'react';

/** Represent component props to style a component inline or via CSS. */
export type StyledComponentProps = {
  /** The class name to apply to the container element. */
  className?: string;
  /** The inline style of the container element. */
  style?: React.CSSProperties;
  /** The content of the element. */
  children?: React.ReactNode;
};
