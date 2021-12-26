import React from 'react';
import {
  clickDay,
  getDayButton,
  getTableFooter
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/modifiers-today';

import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when rendering a month that contains today', () => {
  test('it should add the default class name for today', () => {
    expect(getDayButton(today)).toHaveClass('rdp-day_today');
  });
  test('it should have exactly one ".rdp-day_today" class', () => {
    const todays = container.querySelectorAll('.rdp-day_today');
    expect(todays).toHaveLength(1);
  });
});

describe('when the today date is clicked', () => {
  beforeEach(() => clickDay(today));
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You clicked the today’s date');
  });
});

describe('when another date is clicked', () => {
  const date = addDays(today, 1);
  beforeEach(() => clickDay(date));
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'Try clicking the today’s date.'
    );
  });
});
