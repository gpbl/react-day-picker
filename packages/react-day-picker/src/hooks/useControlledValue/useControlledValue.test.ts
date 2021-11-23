import { act } from 'react-dom/test-utils';
import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { DispatchStateAction, useControlledValue } from './useControlledValue';

type RenderHookProps = {
  defaultValue: string;
  controlledValue: string | undefined;
};

function setup(defaultValue: string, controlledValue: string | undefined) {
  return renderHook<RenderHookProps, [string, DispatchStateAction<string>]>(
    (props) =>
      useControlledValue<string>(props.defaultValue, props.controlledValue),
    {
      initialProps: { defaultValue, controlledValue }
    }
  );
}

describe('when not controlled', () => {
  const defaultValue = 'foo'; // not controlled
  const controlledValue = undefined; // still not controlled
  let hook: RenderHookResult<
    RenderHookProps,
    [string, DispatchStateAction<string>]
  >;
  beforeEach(() => {
    hook = setup(defaultValue, controlledValue);
  });
  test('should return the default value', () => {
    expect(hook.result.current[0]).toBe(defaultValue);
  });
  describe('when setting a new value', () => {
    const newValue = 'bar';
    beforeEach(() => {
      act(() => hook.result.current[1](newValue));
    });
    test('should return the new value', () => {
      expect(hook.result.current[0]).toBe(newValue);
    });
  });
});

describe('when controlled', () => {
  const defaultValue = 'foo'; // not controlled
  const controlledValue = 'bar'; // now controlled
  let hook: RenderHookResult<
    RenderHookProps,
    [string, DispatchStateAction<string>]
  >;
  beforeEach(() => {
    hook = setup(defaultValue, controlledValue);
  });
  test('should return the controlled value', () => {
    expect(hook.result.current[0]).toBe(controlledValue);
  });
  describe('when setting a new value', () => {
    const newValue = 'taz';
    beforeEach(() => {
      act(() => hook.result.current[1](newValue));
    });
    test('should return the controlled value instead', () => {
      expect(hook.result.current[0]).toBe(controlledValue);
    });
  });
});
