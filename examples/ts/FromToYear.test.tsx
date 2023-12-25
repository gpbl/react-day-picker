import { differenceInMonths } from 'date-fns';

import { FromToYear } from './FromToYear';

import {
  app,
  axe,
  freezeTime,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../../test';

const fromDate = new Date(2024, 0);
const toDate = new Date(2026, 11);
const today = new Date(2025, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<FromToYear />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('the previous month button should be disabled', () => {
  expect(previousButton()).toHaveAttribute('aria-disabled', 'true');
});
test('the next month button should not be disabled', () => {
  expect(nextButton()).not.toHaveAttribute('aria-disabled', 'true');
});

describe('when navigating to the last month', () => {
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await user.click(nextButton());
    }
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
  test('the previous month button should not be disabled', () => {
    expect(previousButton()).not.toHaveAttribute('aria-disabled', 'true');
  });
  test('the next month button should be disabled', () => {
    expect(nextButton()).toHaveAttribute('aria-disabled', 'true');
  });
});
