import * as React from 'react';

/** Represent component props to style a component inline or via CSS. */
export interface StyledComponentProps {
  className?: string;
  style?: React.CSSProperties;
}
