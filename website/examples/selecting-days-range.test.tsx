import React from 'react';

import { clickDay, getAllSelectedDays, getDayButton } from '@site/src/test/po';
import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

import Example from './selecting-days-range';

const pastMonth = new Date(2020, 10, 15);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

const days = [
  pastMonth,
  addDays(pastMonth, 1),
  addDays(pastMonth, 2),
  addDays(pastMonth, 3),
  addDays(pastMonth, 4)
];

test.each(days)('%s should be selected', (day) => {
  expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
});

describe('when the third day is clicked', () => {
  const day = days[2];
  beforeEach(() => {
    clickDay(day);
  });
  test.each([days[0], days[1], day])('%s should be selected', (day) => {
    expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
  });
  test.each([days[3], days[4]])('%s should not be selected', (day) => {
    expect(getDayButton(day)).not.toHaveAttribute('aria-pressed');
  });
  describe('when the third day is clicked again', () => {
    const day = days[2];
    beforeEach(() => clickDay(day));
    test('only one day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(1);
    });
    test('only the third day should be selected', () => {
      expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
    });

    describe('when the third day is clicked again', () => {
      const day = days[2];
      beforeEach(() => clickDay(day));
      test('no days should be selected', () => {
        expect(getAllSelectedDays()).toHaveLength(0);
      });
    });
  });
});
