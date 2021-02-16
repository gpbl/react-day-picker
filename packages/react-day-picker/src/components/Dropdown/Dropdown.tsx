import * as React from 'react';

import { useProps } from '../../hooks';
import { UIElement } from '../../types';
import { IconDropdown } from '../IconDropdown';

export interface DropdownProps {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  children?: JSX.Element | JSX.Element[];
  caption?: string;
  className?: string;
}

export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className } = props;
  const { classNames } = useProps();
  return (
    <div className={className}>
      <select
        className={classNames[UIElement.Dropdown]}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div className={classNames[UIElement.DropdownLabel]} aria-hidden="true">
        {caption}
        {<IconDropdown className={classNames[UIElement.DropdownIcon]} />}
      </div>
    </div>
  );
}
