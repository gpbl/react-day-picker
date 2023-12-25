import { setDate } from 'date-fns';

import { RangeMinMax } from './RangeMinMax';

import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';

const today = new Date(2022, 8, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<RangeMinMax />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when the first day is clicked', () => {
  const fromDay = setDate(today, 14);
  beforeEach(async () => {
    await user.click(gridcell(fromDay));
  });
  test('the clicked day should be selected', () => {
    expect(gridcell(fromDay)).toHaveAttribute('aria-selected', 'true');
  });
  test('the days below the min value should be disabled', () => {
    expect(gridcell(setDate(today, 13))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 14))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 15))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
  test('the days between max and min should be enabled', () => {
    expect(gridcell(setDate(today, 9))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 10))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 11))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 12))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 16))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 17))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 18))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 19))).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
  test('the days above the max value should be disabled', () => {
    expect(gridcell(setDate(today, 7))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 8))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 20))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(gridcell(setDate(today, 21))).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
});
