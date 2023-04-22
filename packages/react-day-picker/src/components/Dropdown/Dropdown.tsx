import React from 'react';

import { IconDropdown } from 'components/IconDropdown';
import { useDayPicker } from 'contexts/DayPicker';

/** The props for the {@link Dropdown} component. */
export interface DropdownProps {
  /** The name attribute of the element. */
  name?: string | undefined;
  /** The caption displayed to replace the hidden select. */
  caption?: React.ReactNode | undefined;
  children?:
    | React.SelectHTMLAttributes<HTMLSelectElement>['children']
    | undefined;
  className?: string | undefined;
  ['aria-label']?: string | undefined;
  style?: React.CSSProperties | undefined;
  /** The selected value. */
  value?: string | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const dayPicker = useDayPicker();

  const IconDropdownComponent =
    dayPicker.components?.IconDropdown ?? IconDropdown;
  return (
    <div className={className} style={style}>
      <span className={dayPicker.classNames.vhidden}>
        {props['aria-label']}
      </span>
      <select
        name={props.name}
        aria-label={props['aria-label']}
        className={dayPicker.classNames.dropdown}
        style={dayPicker.styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={dayPicker.classNames.caption_label}
        style={dayPicker.styles.caption_label}
        aria-hidden="true"
      >
        {caption}
        {
          <IconDropdownComponent
            className={dayPicker.classNames.dropdown_icon}
            style={dayPicker.styles.dropdown_icon}
          />
        }
      </div>
    </div>
  );
}
