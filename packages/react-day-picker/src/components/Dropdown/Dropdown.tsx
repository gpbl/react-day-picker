import * as React from 'react';

import { useDayPicker } from 'hooks';

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
  const {
    classNames,
    styles,
    components: { IconDropdown }
  } = useDayPicker();
  return (
    <div className={className} style={style}>
      <select
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
