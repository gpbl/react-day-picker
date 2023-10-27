import { RenderResult, screen } from '@testing-library/react';
import { addDays } from 'date-fns';
import React from 'react';

import { gridcell } from '../../../test';
import { customRender } from '../../../test/render';
import { queryMonthGrids } from '../../../test/selectors';
import { freezeTime } from '../../../test/utils';
import { defaultClassNames } from '../../contexts/DayPickerContext/defaultClassNames';
import { DayPickerProps, PropsDefault } from '../../DayPicker';
import { ClassNames } from '../../types/styles';

import { Calendar } from './Calendar';

const today = new Date(2020, 10, 4);
freezeTime(today);

let container: HTMLElement;
let view: RenderResult;

function setup(props: DayPickerProps = {}) {
  view = customRender(<Calendar />, props);
  container = view.container;
}

describe('when the number of months is 1', () => {
  const props: DayPickerProps = { numberOfMonths: 1 };
  beforeEach(() => {
    setup(props);
  });
  test('should display one month grid', () => {
    expect(queryMonthGrids()).toHaveLength(1);
  });
});

describe('when the number of months is greater than 1', () => {
  const props: DayPickerProps = { numberOfMonths: 3 };
  beforeEach(() => {
    setup(props);
  });
  test('should display the specified number of month grids', () => {
    expect(screen.getAllByRole('grid')).toHaveLength(3);
  });
});

describe('when using the "classNames" prop', () => {
  const classNames: ClassNames = {
    rdp: 'foo-rdp',
    with_weeknumber: '',
    months_wrapper: '',
    caption: '',
    multiple_months: '',
    caption_dropdowns: '',
    caption_label: '',
    nav: '',
    caption_start: '',
    caption_end: '',
    dropdown_year: '',
    dropdown_month: '',
    dropdown: '',
    dropdown_icon: '',
    head: '',
    head_row: '',
    row: '',
    head_cell: '',
    cell: '',
    day: '',
    day_today: '',
    day_outside: '',
    day_selected: '',
    day_disabled: '',
    day_hidden: '',
    day_range_start: '',
    day_range_end: '',
    day_range_middle: '',
    weeknumber_rowheader: '',
    weekdays_row: '',
    weekday_columnheader: '',
    week_row: '',
    month_grid_wrapper: '',
    month_rowgroup: '',
    month_grid: '',
    month_caption: '',
    caption_between: '',
    button_previous: '',
    button_next: '',
    button_icon: '',
    footer: '',
    contrast_more: '',
    contrast_less: '',
    color_dark: '',
    color_light: '',
    color_auto: '',
    'contrast_no-preference': ''
  };
  beforeEach(() => {
    setup({ classNames });
  });
  test('should display the specified number of month grids', () => {
    expect(container.firstChild).toHaveClass('foo');
  });
});

describe('when using the "id" prop', () => {
  const testId = 'foo';
  beforeEach(() => setup({ id: testId }));
  test('should display the specified number of month grids', () => {
    expect(container.firstChild).toHaveAttribute('id', testId);
  });
});

describe('when using the "className" prop', () => {
  const props: DayPickerProps = { className: 'foo' };
  beforeEach(() => {
    setup(props);
  });
  test('should append the class name to the root element', () => {
    expect(container.firstChild).toHaveClass('rdp foo');
  });
});

describe('when the "numberOfMonths" is greater than 1', () => {
  const props: DayPickerProps = { numberOfMonths: 3 };
  const expectedClassName = defaultClassNames.multiple_months;
  beforeEach(() => {
    setup(props);
  });
  test(`should have the ${expectedClassName} class name`, () => {
    expect(container.firstChild).toHaveClass(expectedClassName);
  });
});

describe('when showing the week numbers', () => {
  const props: DayPickerProps = { showWeekNumber: true };
  const expectedClassName = defaultClassNames.with_weeknumber;
  beforeEach(() => {
    setup(props);
  });
  test(`should have the ${expectedClassName} class name`, () => {
    expect(container.firstChild).toHaveClass(expectedClassName);
  });
});

describe('when "initialFocus" is set', () => {
  const defaultProps: PropsDefault = {
    initialFocus: true
  };
  describe('when a day is not selected', () => {
    beforeEach(() => {
      setup(defaultProps);
    });
    test('should focus today', () => {
      expect(gridcell(today)).toHaveFocus();
    });
    describe('when a new day is focused', () => {
      beforeEach(() => {
        gridcell(addDays(today, 1)).focus();
      });
      describe('and the calendar is rerendered', () => {
        test.todo('should focus the new day');
      });
    });
  });
  describe('when a day is selected', () => {
    const selected = addDays(today, 1);
    const props: DayPickerProps = { ...defaultProps, selected };
    beforeEach(() => {
      setup(props);
    });
    test('should focus the selected day', () => {
      expect(gridcell(selected)).toHaveFocus();
    });
  });
});
