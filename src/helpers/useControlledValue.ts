import { useState } from "react";

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param {T} defaultValue - The initial value for the uncontrolled state.
 * @param {T | undefined} controlledValue - The value for the controlled state.
 *   If undefined, the component will use the uncontrolled state.
 * @returns {[T, DispatchStateAction<T>]} - Returns a tuple where the first
 *   element is the current value (either controlled or uncontrolled) and the
 *   second element is a setter function to update the value.
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
