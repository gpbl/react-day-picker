import { RenderResult } from '@testing-library/react-hooks';
import { DayPickerProps } from 'DayPicker';

import { customRenderHook } from 'test/render';

import { FocusContextValue } from 'contexts/Focus';
import { SelectMultipleContextValue } from 'contexts/SelectMultiple';
import { SelectRangeContextValue } from 'contexts/SelectRange';
import { SelectSingleContextValue } from 'contexts/SelectSingle';
import {
  DayEventHandlers,
  DayEventName,
  EventName,
  useDayEventHandlers
} from 'hooks/useDayEventHandlers';
import { ActiveModifiers } from 'types/Modifiers';

const today = new Date(2010, 5, 23);

const singleContext: SelectSingleContextValue = {
  selected: today,
  onDayClick: jest.fn()
};

const multipleContext: SelectMultipleContextValue = {
  selected: [today],
  modifiers: { disabled: [] },
  onDayClick: jest.fn()
};

const rangeContext: SelectRangeContextValue = {
  selected: undefined,
  modifiers: {
    disabled: [],
    range_start: [],
    range_end: [],
    range_middle: []
  },
  onDayClick: jest.fn()
};

const focusContext: FocusContextValue = {
  focus: jest.fn(),
  focusedDay: undefined,
  focusTarget: undefined,
  blur: jest.fn(),
  focusDayAfter: jest.fn(),
  focusDayBefore: jest.fn(),
  focusWeekBefore: jest.fn(),
  focusWeekAfter: jest.fn(),
  focusMonthBefore: jest.fn(),
  focusMonthAfter: jest.fn(),
  focusYearBefore: jest.fn(),
  focusYearAfter: jest.fn(),
  focusStartOfWeek: jest.fn(),
  focusEndOfWeek: jest.fn()
};

const mockedContexts = {
  single: singleContext,
  multiple: multipleContext,
  range: rangeContext,
  focus: focusContext
};

let renderResult: RenderResult<DayEventHandlers>;
function setup(
  date: Date,
  activeModifiers: ActiveModifiers,
  dayPickerProps?: DayPickerProps
) {
  const hookResult = customRenderHook(
    () => useDayEventHandlers(date, activeModifiers),
    dayPickerProps,
    mockedContexts
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

describe.each<'single' | 'multiple' | 'range'>(['single', 'multiple', 'range'])(
  'when calling "onClick" in "%s" selection mode',
  (mode) => {
    const activeModifiers: ActiveModifiers = {};
    const dayPickerProps = { mode, onDayClick: jest.fn() };
    const mouseEvent = {} as React.MouseEvent<HTMLButtonElement, MouseEvent>;
    const date = today;
    beforeEach(() => {
      setup(date, activeModifiers, dayPickerProps);
      renderResult.current.onClick?.(mouseEvent);
    });
    test(`should have called "onDayClick" from the day picker props`, () => {
      expect(dayPickerProps.onDayClick).toHaveBeenCalled();
    });
  }
);

describe('when calling "onFocus"', () => {
  const date = today;
  const activeModifiers: ActiveModifiers = {};
  const mouseEvent = {} as React.FocusEvent<HTMLButtonElement, Element>;
  beforeEach(() => {
    setup(date, activeModifiers);
    renderResult.current.onFocus?.(mouseEvent);
  });
  test('should focus the date in the context', () => {
    expect(focusContext.focus).toHaveBeenCalledWith(date);
  });
});

describe('when calling "onBlur"', () => {
  const date = today;
  const activeModifiers: ActiveModifiers = {};
  const mouseEvent = {} as React.FocusEvent<HTMLButtonElement, Element>;
  beforeEach(() => {
    setup(date, activeModifiers);
    renderResult.current.onBlur?.(mouseEvent);
  });
  test('should blur the date in the context', () => {
    expect(focusContext.blur).toHaveBeenCalled();
  });
});

describe('when calling "onKeyDown"', () => {
  const date = today;
  const activeModifiers: ActiveModifiers = {};

  const tests: [
    key: string,
    dir: string,
    shiftKey: boolean,
    expectedMethod: keyof FocusContextValue
  ][] = [
    ['ArrowLeft', 'ltr', false, 'focusDayBefore'],
    ['ArrowLeft', 'rtl', false, 'focusDayAfter'],
    ['ArrowRight', 'ltr', false, 'focusDayAfter'],
    ['ArrowRight', 'ltr', false, 'focusDayBefore'],
    ['ArrowRight', 'ltr', false, 'focusDayAfter'],
    ['ArrowDown', 'ltr', false, 'focusWeekAfter'],
    ['ArrowUp', 'ltr', false, 'focusWeekBefore'],
    ['PageUp', 'ltr', true, 'focusYearBefore'],
    ['PageUp', 'ltr', false, 'focusMonthBefore'],
    ['PageDown', 'ltr', true, 'focusYearAfter'],
    ['PageDown', 'ltr', false, 'focusMonthAfter'],
    ['Home', 'ltr', false, 'focusStartOfWeek'],
    ['End', 'ltr', false, 'focusEndOfWeek']
  ];

  describe.each(tests)(
    'when key is %s',
    (key, dir, shiftKey, expectedMethod) => {
      describe(`when text direction is "${dir.toUpperCase()}"`, () => {
        describe(`when the shiftKey is ${
          shiftKey ? '' : 'not'
        } pressed`, () => {
          const keyboardEvent = {
            key,
            shiftKey
          } as React.KeyboardEvent<HTMLButtonElement>;
          keyboardEvent.preventDefault = jest.fn();
          keyboardEvent.stopPropagation = jest.fn();

          beforeEach(() => {
            setup(date, activeModifiers, { dir });
            renderResult.current.onKeyDown?.(keyboardEvent);
          });
          test(`should call ${expectedMethod}`, () => {
            expect(focusContext[expectedMethod]).toHaveBeenCalledWith();
          });
          test(`should prevent the default event`, () => {
            expect(keyboardEvent.preventDefault).toHaveBeenCalledWith();
          });
          test(`should stop the event propagation`, () => {
            expect(keyboardEvent.preventDefault).toHaveBeenCalledWith();
          });
        });
      });
    }
  );
});
