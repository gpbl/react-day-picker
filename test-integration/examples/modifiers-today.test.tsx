import React from 'react';

import Example from '@examples/modifiers-today';
import { clickDay, getDayButton, getTableFooter } from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when rendering a month that contains today', () => {
  test('it should add the default class name for today', () => {
    expect(getDayButton(today)).toHaveClass('rdp-day_today');
  });
  test('it should not add this class name for any day that is not today', () => {
    const notToday = addDays(today, 1);
    expect(getDayButton(notToday)).not.toHaveClass('rdp-day_today');
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
