import { axe } from '@site/test/axe';
import { user } from '@site/test/user';
import { act, render } from '@testing-library/react';
import { addDays } from 'date-fns';

import {
  getAllSelectedDays,
  getDayButton
} from 'react-day-picker/test/selectors';

import Example from '@examples/range';

const pastMonth = new Date(2020, 10, 15);
let container: HTMLElement;
const days = [
  pastMonth,
  addDays(pastMonth, 1),
  addDays(pastMonth, 2),
  addDays(pastMonth, 3),
  addDays(pastMonth, 4)
];

beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('should match the snapshot', () => {
  expect(container).toMatchSnapshot();
});
test.each(days)('%s should be selected', (day) => {
  expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
});

describe('when a day in the range is clicked', () => {
  const day = days[2];
  beforeEach(async () => act(() => user.click(getDayButton(day))));
  test.each([days[0], days[1], day])('%s should be selected', (day) => {
    expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
  });
  test.each([days[3], days[4]])('%s should not be selected', (day) => {
    expect(getDayButton(day)).not.toHaveAttribute('aria-selected');
  });
  describe('when the day is clicked again', () => {
    const day = days[2];
    beforeEach(async () => act(() => user.click(getDayButton(day))));
    test('only one day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(1);
    });
    test('only a day in the range should be selected', () => {
      expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
    });

    describe('when a day in the range is clicked again', () => {
      const day = days[2];
      beforeEach(async () => act(() => user.click(getDayButton(day))));
      test('only one day should be selected', () => {
        expect(getAllSelectedDays()).toHaveLength(1);
      });
      test('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});
