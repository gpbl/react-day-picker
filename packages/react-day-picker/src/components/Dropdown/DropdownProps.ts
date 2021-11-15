import * as React from 'react';

/** The props for the [[Dropdown]] component. */

export interface DropdownProps {
  caption?: React.ReactNode;
  children?: React.SelectHTMLAttributes<HTMLSelectElement>['children'];
  className?: string;
  ['aria-label']?: string;
  style?: React.CSSProperties;
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
