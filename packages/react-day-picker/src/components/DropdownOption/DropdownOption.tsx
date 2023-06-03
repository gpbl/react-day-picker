import React from 'react';

/** The props for the {@link DropdownOption} component. */
export interface DropdownOptionProps {
  /** Whether used in the month or year dropdown. */
  type: 'month' | 'year';
  /** The month or the year represented by this option. */
  date: Date;
  /** The value of the option (e.g. the month or the year). */
  value: string | number;
  /** The label of the option. */
  label?: string | undefined;
  /**
   * Use `children` instead of `label` to render a React node.
   * @deprecated Use `label` instead.
   */
  children?: React.ReactNode | undefined;
}

/**
 * Render the option for the {@link Dropdown} component.
 */
export function DropdownOption(props: DropdownOptionProps): JSX.Element {
  return <option value={props.value}>{props.children || props.label}</option>;
}
