import { RenderResult } from '@testing-library/react-hooks';
import { addDays, addMonths, subDays } from 'date-fns';

import { customRenderHook } from 'test/render/customRenderHook';
import { freezeBeforeAll } from 'test/utils';

import { isMatch } from 'contexts/Modifiers/utils/isMatch';
import { DayPickerMultipleProps } from 'types/DayPickerMultiple';
import { ActiveModifiers } from 'types/Modifiers';

import { SelectMultipleContextValue } from './SelectMultipleContext';
import { useSelectMultiple } from './useSelectMultiple';

const today = new Date(2021, 11, 8);
freezeBeforeAll(today);

let result: RenderResult<SelectMultipleContextValue>;

function setup(dayPickerProps?: DayPickerMultipleProps) {
  const rendered = customRenderHook(useSelectMultiple, dayPickerProps);
  result = rendered.result;
}

describe('when is not a multiple select DayPicker', () => {
  beforeAll(() => {
    setup();
  });
  test('the selected day should be undefined', () => {
    expect(result.current.selected).toBeUndefined();
  });
  test('the disabled modifiers should be empty', () => {
    expect(result.current.selected).toBeUndefined();
  });
});

const initialProps: DayPickerMultipleProps = {
  mode: 'multiple',
  onDayClick: jest.fn(),
  onSelect: jest.fn()
};

const selectedDay1 = today;
const selectedDay2 = addDays(today, 1);
const selectedDay3 = addDays(today, 4);

describe('when days are selected from DayPicker props', () => {
  const selected = [selectedDay1, selectedDay2, selectedDay3];
  const dayPickerProps: DayPickerMultipleProps = {
    ...initialProps,
    selected
  };

  beforeAll(() => {
    setup(dayPickerProps);
  });
  test('it should return the days as selected', () => {
    expect(result.current.selected).toStrictEqual(selected);
  });
  describe('when `onDayClick` is called with a not selected day', () => {
    const clickedDay = addDays(selectedDay1, -1);
    beforeAll(() => {
      result.current.onDayClick?.(clickedDay, activeModifiers, event);
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    const activeModifiers = {};
    const event = {} as React.MouseEvent;
    test('should call the `onDayClick` from the DayPicker props', () => {
      expect(dayPickerProps.onDayClick).toHaveBeenCalledWith(
        clickedDay,
        activeModifiers,
        event
      );
    });
    test('should call `onSelect` with the clicked day selected', () => {
      expect(dayPickerProps.onSelect).toHaveBeenCalledWith(
        [...selected, clickedDay],
        clickedDay,
        activeModifiers,
        event
      );
    });
  });
  describe('when `onDayClick` is called with a selected day', () => {
    const clickedDay = selectedDay1;
    const activeModifiers: ActiveModifiers = { selected: true };
    beforeAll(() => {
      result.current.onDayClick?.(clickedDay, activeModifiers, event);
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    const event = {} as React.MouseEvent;
    test('should call the `onDayClick` from the DayPicker props', () => {
      expect(dayPickerProps.onDayClick).toHaveBeenCalledWith(
        clickedDay,
        activeModifiers,
        event
      );
    });
    test('should call `onSelect` without the clicked day selected', () => {
      const expectedSelected = selected.filter((day) => day !== clickedDay);
      expect(dayPickerProps.onSelect).toHaveBeenCalledWith(
        expectedSelected,
        clickedDay,
        activeModifiers,
        event
      );
    });
  });
});

describe('when the maximum number of days are selected from DayPicker props', () => {
  const selected = [selectedDay1, selectedDay2, selectedDay3];
  const dayPickerProps: DayPickerMultipleProps = {
    ...initialProps,
    selected,
    max: selected.length
  };
  beforeAll(() => {
    setup(dayPickerProps);
  });

  test('the selected days should not be disabled', () => {
    const { disabled } = result.current.modifiers;
    expect(isMatch(selectedDay1, disabled)).toBe(false);
    expect(isMatch(selectedDay2, disabled)).toBe(false);
    expect(isMatch(selectedDay3, disabled)).toBe(false);
  });
  test('the other days should be disabled', () => {
    const { disabled } = result.current.modifiers;
    expect(isMatch(addMonths(selectedDay1, 1), disabled)).toBe(true);
    expect(isMatch(addMonths(selectedDay2, 1), disabled)).toBe(true);
  });
  describe('when `onDayClick` is called', () => {
    const clickedDay = addMonths(selectedDay1, 1);
    const activeModifiers: ActiveModifiers = {};
    beforeAll(() => {
      result.current.onDayClick?.(clickedDay, activeModifiers, event);
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    const event = {} as React.MouseEvent;
    test('should call the `onDayClick` from the DayPicker props', () => {
      expect(dayPickerProps.onDayClick).toHaveBeenCalledWith(
        clickedDay,
        activeModifiers,
        event
      );
    });
    test('should not call `onSelect`', () => {
      expect(dayPickerProps.onSelect).not.toHaveBeenCalled();
    });
  });
});

describe('when the minimum number of days are selected from DayPicker props', () => {
  const selected = [selectedDay1, selectedDay2, selectedDay3];
  const dayPickerProps: DayPickerMultipleProps = {
    ...initialProps,
    selected,
    min: selected.length
  };
  beforeAll(() => {
    setup(dayPickerProps);
  });
  describe('when `onDayClick` is called with one of the selected days', () => {
    const clickedDay = selected[0];
    const activeModifiers: ActiveModifiers = { selected: true };
    beforeAll(() => {
      result.current.onDayClick?.(clickedDay, activeModifiers, event);
    });
    afterAll(() => {
      jest.resetAllMocks();
    });
    const event = {} as React.MouseEvent;
    test('should call the `onDayClick` from the DayPicker props', () => {
      expect(dayPickerProps.onDayClick).toHaveBeenCalledWith(
        clickedDay,
        activeModifiers,
        event
      );
    });
    test('should not call `onSelect`', () => {
      expect(dayPickerProps.onSelect).not.toHaveBeenCalled();
    });
  });
});
