import React from 'react';

/**
 * An interface that describes
 * a pair of mutually exclusive
 * properties.
 *
 * A component must choose to be controlled or
 * uncontrolled for the lifetime of the component.
 *
 * For a controlled component, the state is managed externally
 * and passed into the component, allowing the user of the
 * component to control the state.
 *
 * For an uncontrolled component, the state is managed internally.
 * The user of the component can pass in an initial default value,
 * and receive the state when it changes, but cannot control
 * the value.
 *
 * If a component is controlled, it should specify the
 * controlled value property and should not specify the default
 * value property.
 *
 * If it is uncontrolled, is should leave
 * the controlled property undefined, and optionally,
 * may define a default (initial) value for the
 * property.
 */
export type ControllableProp<T> = {
  /** The 'controlled' property. */
  value?: T;
  /** The default (initial) value for the uncontrolled behavior. */
  defaultValue: T;
};

export function useControllablePropState<T>(
  props: ControllableProp<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [uncontrolledValue, setValue] = React.useState(props.defaultValue);
  const controlledValue = props.value;
  const value =
    controlledValue === undefined ? uncontrolledValue : controlledValue;

  return [value, setValue];
}
