import * as React from 'react';

/** Represent the props to attach to the input field. */
export interface UseInputFieldProps {
  /** Event handler for the blur event. */
  onBlur: React.FocusEventHandler;
  /** Event handler for the change event. */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** Event handler for the focus event. */
  onFocus: React.FocusEventHandler;
  /** The value of the input field */
  value: string;
}
