import React, { LegacyRef } from 'react';

import { useDayPicker } from '../../contexts/DayPicker';

/** The props for the [[Button]] component. */
export type ButtonProps = React.HTMLProps<HTMLButtonElement>;

/**
 * Render a button HTML element applying the reset class name.
 */
export function Button(
  props: ButtonProps & { ref?: LegacyRef<HTMLButtonElement> }
): JSX.Element {
  const { classNames, styles } = useDayPicker();

  const classNamesArr = [classNames.button_reset, classNames.button];
  if (props.className) {
    classNamesArr.push(props.className);
  }
  const className = classNamesArr.join(' ');

  const style = { ...styles.button_reset, ...styles.button };
  if (props.style) {
    Object.assign(style, props.style);
  }

  return (
    <button
      {...props}
      ref={props.ref}
      type="button"
      className={className}
      style={style}
    />
  );
}
