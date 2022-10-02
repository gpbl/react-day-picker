import { act } from '@testing-library/react-hooks';
import { addMonths, startOfMonth } from 'date-fns';

import { customRenderHook } from 'test/render/customRenderHook';
import { freezeBeforeAll } from 'test/utils';

import { DayPickerBase } from 'types/DayPickerBase';

import { useNavigationState } from './useNavigationState';

const today = new Date(2021, 11, 8);
freezeBeforeAll(today);

function setup(dayPickerProps?: DayPickerBase) {
  const { result } = customRenderHook(
    () => useNavigationState(),
    dayPickerProps
  );
  return result;
}

describe('when goToMonth is called', () => {
  test('should set the month in state', () => {
    const onMonthChange = jest.fn();
    const result = setup({ onMonthChange });
    const month = addMonths(today, 2);
    act(() => {
      result.current[1](month);
    });
    expect(result.current[0]).toEqual(startOfMonth(month));
    expect(onMonthChange).toBeCalledWith(startOfMonth(month));
  });
  describe('when navigation is disabled', () => {
    test('should not set the month in state', () => {
      const onMonthChange = jest.fn();
      const result = setup({ disableNavigation: true, onMonthChange });
      const month = addMonths(today, 2);
      result.current[1](month);
      expect(result.current[0]).toEqual(startOfMonth(today));
      expect(onMonthChange).not.toBeCalled();
    });
  });
});
