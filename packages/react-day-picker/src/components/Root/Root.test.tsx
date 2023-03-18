import React from 'react';

import { RenderResult } from '@testing-library/react';
import { addDays } from 'date-fns';
import { InternalDayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';
import { getDayButton, queryMonthGrids } from 'test/selectors';
import { freezeBeforeAll } from 'test/utils';

import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { ClassNames } from 'types/Styles';

import { Root } from './Root';

const today = new Date(2020, 10, 4);
freezeBeforeAll(today);

let container: HTMLElement;
let view: RenderResult;

function setup(dayPickerProps: InternalDayPickerProps = {}) {
  view = customRender(<Root />, dayPickerProps);
  container = view.container;
}

describe('when the number of months is 1', () => {
  const props: InternalDayPickerProps = { numberOfMonths: 1 };
  beforeEach(() => {
    setup(props);
  });
  test('should display one month grid', () => {
    expect(queryMonthGrids()).toHaveLength(1);
  });
});

describe('when the number of months is greater than 1', () => {
  const props: InternalDayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(props);
  });
  test('should display the specified number of month grids', () => {
    expect(queryMonthGrids()).toHaveLength(3);
  });
});

describe('when using the "classNames" prop', () => {
  const classNames: ClassNames = {
    root: 'foo'
  };
  beforeEach(() => {
    setup({ classNames });
  });
  test('should display the specified number of month grids', () => {
    expect(container.firstChild).toHaveClass('foo');
  });
});

describe('when using the "className" prop', () => {
  const props: InternalDayPickerProps = { className: 'foo' };
  beforeEach(() => {
    setup(props);
  });
  test('should append the class name to the root element', () => {
    expect(container.firstChild).toHaveClass('rdp foo');
  });
});

describe('when the "numberOfMonths" is greater than 1', () => {
  const props: InternalDayPickerProps = { numberOfMonths: 3 };
  const expectedClassName = defaultClassNames.multiple_months;
  beforeEach(() => {
    setup(props);
  });
  test(`should have the ${expectedClassName} class name`, () => {
    expect(container.firstChild).toHaveClass(expectedClassName);
  });
});

describe('when showing the week numbers', () => {
  const props: InternalDayPickerProps = { showWeekNumber: true };
  const expectedClassName = defaultClassNames.with_weeknumber;
  beforeEach(() => {
    setup(props);
  });
  test(`should have the ${expectedClassName} class name`, () => {
    expect(container.firstChild).toHaveClass(expectedClassName);
  });
});

describe('when "initialFocus" is set', () => {
  const baseProps: InternalDayPickerProps = {
    initialFocus: true,
    mode: 'single'
  };
  describe('when a day is not selected', () => {
    beforeEach(() => {
      setup(baseProps);
    });
    test('should focus today', () => {
      expect(getDayButton(today)).toHaveFocus();
    });
    describe('when a new day is focused', () => {
      beforeEach(() => {
        getDayButton(addDays(today, 1)).focus();
      });
      describe('and the calendar is rerendered', () => {
        test.todo('should focus the new day');
      });
    });
  });
  describe('when a day is selected', () => {
    const selected = addDays(today, 1);
    const props: InternalDayPickerProps = { ...baseProps, selected };
    beforeEach(() => {
      setup(props);
    });
    test('should focus the selected day', () => {
      expect(getDayButton(selected)).toHaveFocus();
    });
  });
});
