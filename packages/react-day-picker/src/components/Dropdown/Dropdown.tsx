import * as React from 'react';

import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';
import { IconDropdown } from '../IconDropdown';

export interface DropdownProps {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  children?: JSX.Element | JSX.Element[];
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Render a dropdown component (basically, a styled HTMLSelectElement).
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const { classNames, styles } = useDayPicker();
  return (
    <div className={className} style={style}>
      <select
        className={classNames[UIElement.Dropdown]}
        style={styles?.[UIElement.Dropdown]}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={classNames[UIElement.CaptionLabel]}
        style={styles?.[UIElement.CaptionLabel]}
        aria-hidden="true"
      >
        {caption}
        {
          <IconDropdown
            className={classNames[UIElement.DropdownIcon]}
            style={styles?.[UIElement.DropdownIcon]}
          />
        }
      </div>
    </div>
  );
}
