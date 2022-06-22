import { createRef } from 'react';

import { RenderResult } from '@testing-library/react-hooks';
import { addDays, addMonths } from 'date-fns';
import { DayPickerProps } from 'DayPicker';

import { customRenderHook, CustomRenderHookContexts } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { FocusContextValue } from 'contexts/Focus';
import { EventName } from 'hooks/useDayEventHandlers';

import { DayRender } from './';
import { useDayRender } from './useDayRender';

const today = new Date(2022, 5, 13);

freezeBeforeAll(today);

let result: RenderResult<DayRender>;

const mockedFocusContext: FocusContextValue = {
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

function setup(
  date: Date,
  displayMonth: Date,
  dayPickerProps?: DayPickerProps,
  contexts?: CustomRenderHookContexts
) {
  const buttonRef = createRef<HTMLButtonElement>();
  const view = customRenderHook(
    () => useDayRender(date, displayMonth, buttonRef),
    dayPickerProps,
    contexts
  );
  result = view.result;
}

describe('when rendering the today’s date', () => {
  const date = today;
  const displayMonth = date;
  beforeEach(() => {
    setup(date, displayMonth);
  });
  test('the div should include the default class name', () => {
    expect(result.current.divProps.className?.split(' ')).toContain(
      defaultClassNames.day
    );
  });
  test('the button should include the default class name', () => {
    expect(result.current.buttonProps.className?.split(' ')).toContain(
      defaultClassNames.day
    );
  });
  test('the button should not have "aria-pressed"', () => {
    expect(result.current.buttonProps['aria-pressed']).toBeUndefined();
  });
  test('the button should have 0 as "tabIndex"', () => {
    expect(result.current.buttonProps.tabIndex).toBe(0);
  });

  const testEvents: EventName[] = [
    'onClick',
    'onFocus',
    'onBlur',
    'onKeyDown',
    'onKeyUp',
    'onMouseEnter',
    'onMouseLeave',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart'
  ];
  test.each(testEvents)(
    'the button should have the "%s" event handler',
    (eventName) => {
      expect(result.current.buttonProps[eventName]).toBeDefined();
    }
  );
  test('should return the day active modifiers', () => {
    expect(result.current.activeModifiers).toEqual({ today: true });
  });
});

describe('when not in selection mode', () => {
  const dayPickerProps = { mode: undefined };
  beforeEach(() => {
    setup(today, today, dayPickerProps);
  });
  test('should not be a button', () => {
    expect(result.current.isButton).toBe(false);
  });
});
describe('when "onDayClick" is not passed in', () => {
  const dayPickerProps = { onDayClick: undefined };
  beforeEach(() => {
    setup(today, today, dayPickerProps);
  });
  test('should not be a button', () => {
    expect(result.current.isButton).toBe(false);
  });
});
describe('when in selection mode', () => {
  const dayPickerProps: DayPickerProps = { mode: 'single' };
  beforeEach(() => {
    setup(today, today, dayPickerProps);
  });
  test('should be a button', () => {
    expect(result.current.isButton).toBe(true);
  });
});

describe('when "onDayClick" is passed in', () => {
  const dayPickerProps: DayPickerProps = { onDayClick: jest.fn() };
  beforeEach(() => {
    setup(today, today, dayPickerProps);
  });
  test('should be a button', () => {
    expect(result.current.isButton).toBe(true);
  });
});

describe('when showing the outside days', () => {
  const dayPickerProps: DayPickerProps = { showOutsideDays: false };
  describe('when the day is outside', () => {
    const day = today;
    const displayMonth = addMonths(today, 1);
    beforeEach(() => {
      setup(day, displayMonth, dayPickerProps);
    });
    test('should be hidden', () => {
      expect(result.current.isHidden).toBe(true);
    });
  });
});

describe('when the day has the "hidden" modifier active', () => {
  const date = today;
  const dayPickerProps: DayPickerProps = {
    modifiers: { hidden: date }
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('should have the hidden modifier active', () => {
    expect(result.current.activeModifiers.hidden).toBe(true);
  });
  test('should be hidden', () => {
    expect(result.current.isHidden).toBe(true);
  });
});

describe('when "modifiersStyles" is passed in', () => {
  const date = today;
  const dayPickerProps = {
    modifiers: { foo: date },
    modifiersStyles: { foo: { color: 'red' } }
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the div props should include the modifiers style', () => {
    expect(result.current.divProps.style).toStrictEqual(
      dayPickerProps.modifiersStyles.foo
    );
  });
  test('the button props should include the modifiers style', () => {
    expect(result.current.buttonProps.style).toStrictEqual(
      dayPickerProps.modifiersStyles.foo
    );
  });
});
describe('when "styles.day" is passed in', () => {
  const date = today;
  const dayPickerProps = {
    styles: { day: { color: 'red' } }
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the div props should include the style', () => {
    expect(result.current.divProps.style).toStrictEqual(
      dayPickerProps.styles.day
    );
  });
  test('the button props should include the style', () => {
    expect(result.current.buttonProps.style).toStrictEqual(
      dayPickerProps.styles.day
    );
  });
});

describe('when "modifiersClassNames" is passed in', () => {
  const date = today;
  const dayPickerProps = {
    modifiers: { foo: date },
    modifiersClassNames: { foo: 'bar' }
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the div props should include the modifiers classNames', () => {
    expect(result.current.divProps.className).toContain(
      dayPickerProps.modifiersClassNames.foo
    );
  });
  test('the button props should include the modifiers classNames', () => {
    expect(result.current.buttonProps.className).toContain(
      dayPickerProps.modifiersClassNames.foo
    );
  });
});

describe('when "classNames.day" is passed in', () => {
  const date = today;
  const dayPickerProps = {
    classNames: { day: 'foo' }
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the div props should include the class name', () => {
    expect(result.current.divProps.className).toContain(
      dayPickerProps.classNames.day
    );
  });
  test('the button props should include the class name', () => {
    expect(result.current.buttonProps.className).toContain(
      dayPickerProps.classNames.day
    );
  });
});

describe('when the day is not target of focus', () => {
  const yesterday = addDays(today, -1);
  const tomorrow = addDays(today, 1);
  const focusContext: FocusContextValue = {
    ...mockedFocusContext,
    focusTarget: yesterday
  };
  beforeEach(() => {
    setup(tomorrow, tomorrow, {}, { focus: focusContext });
  });
  test('the button should have tabIndex -1', () => {
    expect(result.current.buttonProps.tabIndex).toBe(-1);
  });
});

describe('when the day is target of focus', () => {
  const date = today;
  const focusContext: FocusContextValue = {
    ...mockedFocusContext,
    focusTarget: date
  };
  beforeEach(() => {
    setup(date, date, {}, { focus: focusContext });
  });
  test('the button should have tabIndex 0', () => {
    expect(result.current.buttonProps.tabIndex).toBe(0);
  });
});

describe('when the day is disabled', () => {
  const date = today;
  const dayPickerProps = {
    disabled: date
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the button should be disabled', () => {
    expect(result.current.buttonProps.disabled).toBe(true);
  });
});

describe('when the day is selected', () => {
  const date = today;
  const dayPickerProps = {
    selected: date
  };
  beforeEach(() => {
    setup(date, date, dayPickerProps);
  });
  test('the button should have "aria-pressed"', () => {
    expect(result.current.buttonProps['aria-pressed']).toBe(true);
  });
});
