import * as React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { DropdownProps } from './DropdownProps';

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const {
    classNames,
    styles,
    components: { IconDropdown }
  } = useDayPicker();
  return (
    <div className={className} style={style}>
      <span className={classNames.vhidden}>{props['aria-label']}</span>
      <select
        aria-label={props['aria-label']}
        className={classNames.dropdown}
        style={styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={classNames.caption_label}
        style={styles.caption_label}
        aria-hidden="true"
      >
        {caption}
        {
          <IconDropdown
            className={classNames.dropdown_icon}
            style={styles.dropdown_icon}
          />
        }
      </div>
    </div>
  );
}
