import { useState } from "react"

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * A helper hook for handling controlled and uncontrolled values in a
 * component's props.
 *
 * If the value is uncontrolled, pass `undefined` as `controlledValue` and use
 * the returned setter to update it.
 *
 * If the value is controlled, pass the controlled value as the second argument,
 * which will always be returned as `value`.
 *
 * @template T - The type of the value.
 */
export function useControlledValue<T>(
  defaultValue: T,
  controlledValue: T | undefined
): [T, DispatchStateAction<T>] {
  const [uncontrolledValue, setValue] = useState(defaultValue);

  const value =
    controlledValue === undefined ? uncontrolledValue : controlledValue;

  return [value, setValue] as [T, DispatchStateAction<T>];
}
