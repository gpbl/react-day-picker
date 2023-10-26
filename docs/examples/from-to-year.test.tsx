import { differenceInMonths } from 'date-fns';
import {
  app,
  axe,
  freezeTime,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../../test';
import Example from './from-to-year';

const fromDate = new Date(2024, 0);
const toDate = new Date(2026, 11);
const today = new Date(2025, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('the previous month button should be disabled', () => {
  expect(previousButton()).toBeDisabled();
});
test('the next month button should not be disabled', () => {
  expect(nextButton()).not.toBeDisabled();
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
    expect(previousButton()).not.toBeDisabled();
  });
  test('the next month button should be disabled', () => {
    expect(nextButton()).toBeDisabled();
  });
});
