import React from 'react';

import { clickDay, getAllEnabledDays, getDayButton } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './range-min-max';

const today = new Date(2021, 10, 15);

freezeBeforeAll(today);
beforeEach(() => {
  render(<Example />);
});

const days = [
  new Date(2021, 10, 16),
  new Date(2021, 10, 17),
  new Date(2021, 10, 18),
  new Date(2021, 10, 19),
  new Date(2021, 10, 20)
];
describe('when the first day is clicked', () => {
  const fromDay = new Date(2021, 10, 15);
  beforeEach(() => clickDay(fromDay));
  test('should disable before the allowed range', () => {
    expect(getAllEnabledDays()[0]).toHaveTextContent('11th');
  });
  test('should disable after the allowed range', () => {
    const enabledDays = getAllEnabledDays();
    expect(enabledDays[enabledDays.length - 1]).toHaveTextContent('19th');
  });
  describe('when clicking a day after the from date', () => {
    const toDay = new Date(2021, 10, 17);
    const expectedSelectedDays = [
      new Date(2021, 10, 15),
      new Date(2021, 10, 16),
      new Date(2021, 10, 17)
    ];
    beforeEach(() => clickDay(toDay));
    test.each(expectedSelectedDays)('%s should be selected', (day) => {
      expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
    });
    test('should enable the days up to the clicked day', () => {
      const enabledDays = getAllEnabledDays();
      expect(enabledDays[enabledDays.length - 1]).toHaveTextContent('19th');
    });
  });
  describe('when clicking a day before the from date', () => {
    const toDay = new Date(2021, 10, 11);
    const expectedSelectedDays = [
      new Date(2021, 10, 11),
      new Date(2021, 10, 12),
      new Date(2021, 10, 13),
      new Date(2021, 10, 14),
      new Date(2021, 10, 15)
    ];
    beforeEach(() => clickDay(toDay));
    test.each(expectedSelectedDays)('%s should be selected', (day) => {
      expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
    });
  });
});
