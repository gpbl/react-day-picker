import { act } from 'react-dom/test-utils';

import { renderDayPickerHook } from 'test/render';

import { useControlledValue } from './useControlledValue';

function renderHook(defaultValue: string, controlledValue: string | undefined) {
  return renderDayPickerHook(() =>
    useControlledValue<string>(defaultValue, controlledValue)
  );
}

describe('when the value is controlled', () => {
  const defaultValue = 'foo'; // not controlled
  const controlledValue = 'bar'; // now controlled
  test('should return the controlled value', () => {
    const result = renderHook(defaultValue, controlledValue);
    expect(result[0]).toBe(controlledValue);
  });
  describe('when setting a new value', () => {
    const newValue = 'taz';
    test('should return the controlled value instead', () => {
      const result = renderHook(defaultValue, controlledValue);
      act(() => result[1](newValue));
      expect(result[0]).toBe(controlledValue);
    });
  });
});

describe('when the value is not controlled', () => {
  const defaultValue = 'foo';
  const controlledValue = undefined;
  test('should return the value', () => {
    const result = renderHook(defaultValue, controlledValue);
    expect(result[0]).toBe(defaultValue);
  });
  describe('when setting a new value', () => {
    const newValue = 'bar';
    test('should return the new value', async () => {
      const result = renderHook(defaultValue, controlledValue);
      await act(() => result[1](newValue));
      expect(result[0]).toBe(newValue);
    });
  });
});
