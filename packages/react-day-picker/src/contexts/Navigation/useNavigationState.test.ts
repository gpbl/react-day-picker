import { addMonths, startOfMonth } from 'date-fns';

import { customRenderHook } from 'test/render/customRenderHook';
import { freezeBeforeAll } from 'test/utils';

import { DayPickerProps } from 'types/DayPicker';

import { useNavigationState } from './useNavigationState';

const today = new Date(2021, 11, 8);
freezeBeforeAll(today);

function setup(dayPickerProps?: DayPickerProps) {
  const { result } = customRenderHook(
    () => useNavigationState(),
    dayPickerProps
  );
  return result;
}

describe('when goToMonth is called', () => {
  test('should set the month in state', () => {
    const result = setup();
    const month = addMonths(today, 2);
    result.current[1](month);
    expect(result.current[0]).toEqual(startOfMonth(month));
  });
  describe('when navigation is disabled', () => {
    test('should not set the month in state', () => {
      const result = setup({ disableNavigation: true });
      const month = addMonths(today, 2);
      result.current[1](month);
      expect(result.current[0]).toEqual(startOfMonth(today));
    });
  });
});
