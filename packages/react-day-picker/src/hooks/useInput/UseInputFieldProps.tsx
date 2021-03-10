import * as React from 'react';

/** Represent the props to attach to the input field. */

export interface UseInputFieldProps {
  onBlur: React.FocusEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler;
  value: string;
}
