import React from 'react';

import { customRenderHook } from 'test/render/customRenderHook';
import { freezeBeforeAll } from 'test/utils';

import { DayPickerProps } from 'types/DayPicker';
import { DayPickerSingleProps } from 'types/DayPickerSingle';
import { ActiveModifiers } from 'types/Modifiers';

import { useSelectSingle } from './useSelectSingle';

const today = new Date(2021, 11, 8);
freezeBeforeAll(today);

function setup(dayPickerProps?: DayPickerProps) {
  const { result } = customRenderHook(() => useSelectSingle(), dayPickerProps);
  return result;
}

describe('when is not a single select DayPicker', () => {
  const result = setup();
  test('the selected day should be undefined', () => {
    expect(result.current.selected).toBeUndefined();
  });
});

describe('when a day is selected from DayPicker props', () => {
  test('the selected day should be today', () => {
    const dayPickerProps: DayPickerSingleProps = {
      mode: 'single',
      selected: today
    };
    const result = setup(dayPickerProps);
    expect(result.current.selected).toBe(today);
  });
  describe('when onDayClick is called', () => {
    const dayPickerProps: DayPickerSingleProps = {
      mode: 'single',
      selected: today,
      onSelect: jest.fn()
    };
    const result = setup(dayPickerProps);
    const activeModifiers = {};
    const event = {} as React.MouseEvent;
    result.current.onDayClick?.(today, activeModifiers, event);
    test('should call the `onSelect` event handler', () => {
      expect(dayPickerProps.onSelect).toHaveBeenCalledWith(
        today,
        today,
        activeModifiers,
        event
      );
    });
  });
  describe('if a selected day is not required', () => {
    const dayPickerProps: DayPickerSingleProps = {
      mode: 'single',
      selected: today,
      onSelect: jest.fn(),
      required: false
    };
    const result = setup(dayPickerProps);
    const activeModifiers: ActiveModifiers = { selected: true };
    const event = {} as React.MouseEvent;
    result.current.onDayClick?.(today, activeModifiers, event);
    test('should call the `onSelect` event handler with an undefined day', () => {
      expect(dayPickerProps.onSelect).toHaveBeenCalledWith(
        undefined,
        today,
        activeModifiers,
        event
      );
    });
  });
});
