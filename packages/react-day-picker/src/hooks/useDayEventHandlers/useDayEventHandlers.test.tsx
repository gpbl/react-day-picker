import { RenderResult } from '@testing-library/react-hooks';

import { customRenderHook } from 'test/render';

import { SelectMultipleContextValue } from 'contexts/SelectMultiple';
import { SelectRangeContextValue } from 'contexts/SelectRange';
import { SelectSingleContextValue } from 'contexts/SelectSingle';
import {
  DayEventHandlers,
  DayEventName,
  EventName,
  useDayEventHandlers
} from 'hooks/useDayEventHandlers';
import { DayPickerProps, DaySelectionMode } from 'types/DayPicker';
import { ActiveModifiers } from 'types/Modifiers';

const today = new Date(2010, 5, 23);

const single: SelectSingleContextValue = {
  selected: today,
  onDayClick: jest.fn()
};

const multiple: SelectMultipleContextValue = {
  selected: [today],
  modifiers: { disabled: [] },
  onDayClick: jest.fn()
};

const range: SelectRangeContextValue = {
  selected: undefined,
  modifiers: {
    disabled: [],
    range_start: [],
    range_end: [],
    range_middle: []
  },
  onDayClick: jest.fn()
};
const selectionContext: Record<DaySelectionMode, any> = {
  single,
  multiple,
  range,
  custom: undefined
};

let renderResult: RenderResult<DayEventHandlers>;
function setup(
  date: Date,
  activeModifiers: ActiveModifiers,
  dayPickerProps: DayPickerProps
) {
  const hookResult = customRenderHook(
    () => useDayEventHandlers(date, activeModifiers),
    dayPickerProps,
    selectionContext
  );
  renderResult = hookResult.result;
}

const tests: [EventName, DayEventName][] = [
  ['onClick', 'onDayClick'],
  ['onFocus', 'onDayFocus'],
  ['onBlur', 'onDayBlur'],
  ['onMouseEnter', 'onDayMouseEnter'],
  ['onMouseLeave', 'onDayMouseLeave'],
  ['onTouchEnd', 'onDayTouchEnd'],
  ['onTouchCancel', 'onDayTouchCancel'],
  ['onTouchMove', 'onDayTouchMove'],
  ['onTouchStart', 'onDayTouchStart'],
  ['onKeyUp', 'onDayKeyUp']
];

describe.each(tests)('when calling "%s"', (eventName, dayEventName) => {
  const activeModifiers: ActiveModifiers = {};
  const dayPickerProps = {
    [dayEventName]: jest.fn()
  };
  const mouseEvent = {} as React.MouseEvent<HTMLButtonElement, MouseEvent>;
  const date = today;
  beforeEach(() => {
    setup(date, activeModifiers, dayPickerProps);
    //@ts-expect-error TOFIX: How to mock mouse event here?
    renderResult.current[eventName]?.(mouseEvent);
  });
  test(`${dayEventName} should have been called`, () => {
    expect(dayPickerProps[dayEventName]).toHaveBeenCalledWith(
      date,
      activeModifiers,
      mouseEvent
    );
  });
});

describe.each<DaySelectionMode>(['single', 'multiple', 'range'])(
  'when calling "onClick" in "%s" selection mode',
  (mode) => {
    const activeModifiers: ActiveModifiers = {};
    const dayPickerProps = { mode };
    const mouseEvent = {} as React.MouseEvent<HTMLButtonElement, MouseEvent>;
    const date = today;
    beforeEach(() => {
      setup(date, activeModifiers, dayPickerProps);
      renderResult.current.onClick?.(mouseEvent);
    });
    test(`should have called "onDayClick" from the ${mode} selection context`, () => {
      expect(selectionContext[mode].onDayClick).toHaveBeenCalled();
    });
  }
);
