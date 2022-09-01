import React from 'react';

import { RenderResult, screen } from '@testing-library/react';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';

import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { formatWeekdayName } from 'contexts/DayPicker/formatters';
import { labelWeekday } from 'contexts/DayPicker/labels';

import { HeadRow } from './HeadRow';
import { getWeekdays } from './utils/getWeekdays';

let container: HTMLElement;
let view: RenderResult;

let thElements: HTMLTableCellElement[];

function setup(dayPickerProps: DayPickerProps = {}) {
  view = customRender(
    <table>
      <thead>
        <HeadRow />
      </thead>
    </table>,
    dayPickerProps
  );
  container = view.container.firstChild?.firstChild as HTMLTableRowElement;
  thElements = Array.from(container.getElementsByTagName('th'));
}

const dayPickerProps = {
  styles: {
    head: { color: 'red' },
    head_row: { color: 'blue' },
    head_cell: { color: 'green' }
  },
  classNames: {
    head: 'foo',
    head_row: 'foo_row',
    head_cell: 'foo_head-cell'
  }
};

describe('when rendered', () => {
  beforeEach(() => {
    setup(dayPickerProps);
  });

  test('tr element should have the `head_row` style', () => {
    expect(container.firstChild).toHaveStyle(dayPickerProps.styles.head_row);
  });

  test('tr element should have the `head_row` class', () => {
    expect(container.firstChild).toHaveClass(
      dayPickerProps.classNames.head_row
    );
  });
  test('should render 7 head elements', () => {
    expect(thElements).toHaveLength(7);
  });
  test('should render the head elements with the "head_cell" class name', () => {
    thElements.forEach((el) => {
      expect(el).toHaveClass(dayPickerProps.classNames.head_cell);
    });
  });
  test('the formatted weekday name should be ARIA-hidden', () => {
    const weekdays = getWeekdays();
    weekdays.forEach((weekday) => {
      const text = formatWeekdayName(weekday);
      expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'true');
    });
  });
  test('the label should not be visible', () => {
    const weekdays = getWeekdays();
    weekdays.forEach((weekday) => {
      const text = labelWeekday(weekday);
      expect(screen.getByText(text)).toHaveClass(defaultClassNames.vhidden);
    });
  });
});

describe('when showing the week numbers', () => {
  beforeEach(() => {
    setup({ ...dayPickerProps, showWeekNumber: true });
  });
  test('should render 8 head elements', () => {
    expect(thElements).toHaveLength(8);
  });
  test('the first head element should be empty', () => {
    expect(thElements[0]).toHaveTextContent('');
  });
  test('should render the head elements with the "head_cell" class name', () => {
    thElements.forEach((el) => {
      expect(el).toHaveClass(dayPickerProps.classNames.head_cell);
    });
  });
  test('should render the head elements with the "head_cell" style', () => {
    thElements.forEach((el) => {
      expect(el).toHaveStyle(dayPickerProps.styles.head_cell);
    });
  });
  test('should render the head elements with the "col" scope', () => {
    thElements.forEach((el) => {
      expect(el).toHaveAttribute('scope', 'col');
    });
  });
});
