import React from 'react';

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * Helper hook for using controlled/uncontrolled values from a component props.
 *
 * When a component is controlled, pass the controller value and use the
 * returned setter to update it.
 */
export function useControlledValue<T>(
  defaultValue: unknown,
  controlledValue: unknown | undefined
): [T, DispatchStateAction<T>] {
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const value =
    controlledValue === undefined ? uncontrolledValue : controlledValue;

  return [value, setUncontrolledValue] as [T, DispatchStateAction<T>];
}
