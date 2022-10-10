import React from 'react';

import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

import { clickDay } from 'react-day-picker/test/actions';
import { getAllSelectedDays, getDayButton } from 'react-day-picker/test/po';

import Example from '@examples/range';

const pastMonth = new Date(2020, 10, 15);

let firstChild: ChildNode;
beforeEach(() => {
  firstChild = render(<Example />).container.firstChild;
});

const days = [
  pastMonth,
  addDays(pastMonth, 1),
  addDays(pastMonth, 2),
  addDays(pastMonth, 3),
  addDays(pastMonth, 4)
];

test('should match the snapshot', () => {
  expect(firstChild).toMatchSnapshot();
});
test.each(days)('%s should be selected', (day) => {
  expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
});

describe('when a day in the range is clicked', () => {
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
  describe('when the day is clicked again', () => {
    const day = days[2];
    beforeEach(() => clickDay(day));
    test('only one day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(1);
    });
    test('only a day in the range should be selected', () => {
      expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
    });

    describe('when a day in the range is clicked again', () => {
      const day = days[2];
      beforeEach(() => clickDay(day));
      test('only one day should be selected', () => {
        expect(getAllSelectedDays()).toHaveLength(1);
      });
      test('should match the snapshot', () => {
        expect(firstChild).toMatchSnapshot();
      });
    });
  });
});
