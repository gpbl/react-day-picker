import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

/** The props for the [[Dropdown]] component. */
export interface DropdownProps {
  caption?: React.ReactNode;
  children?: React.SelectHTMLAttributes<HTMLSelectElement>['children'];
  className?: string;
  ['aria-label']?: string;
  style?: React.CSSProperties;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const dayPickerProps = useDayPicker();
  return (
    <div className={className} style={style}>
      <span className={dayPickerProps.classNames.vhidden}>
        {props['aria-label']}
      </span>
      <select
        aria-label={props['aria-label']}
        className={dayPickerProps.classNames.dropdown}
        style={dayPickerProps.styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={dayPickerProps.classNames.caption_label}
        style={dayPickerProps.styles.caption_label}
        aria-hidden="true"
      >
        {caption}
        {
          <dayPickerProps.components.IconDropdown
            className={dayPickerProps.classNames.dropdown_icon}
            style={dayPickerProps.styles.dropdown_icon}
          />
        }
      </div>
    </div>
  );
}
