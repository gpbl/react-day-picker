import { differenceInMonths } from 'date-fns';
import {
  app,
  axe,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../../test';
import { FromToMonth } from './FromToMonth';

beforeEach(() => {
  renderApp(<FromToMonth />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('the previous button should be disabled', () => {
  expect(previousButton()).toBeDisabled();
});

test('the next button should not be disabled', () => {
  expect(nextButton()).not.toBeDisabled();
});

describe('when navigating to the last month', () => {
  const fromDate = new Date(2015, 5);
  const toDate = new Date(2015, 10);
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await user.click(nextButton());
    }
  });

  test('the previous button should not be disabled', () => {
    expect(previousButton()).not.toBeDisabled();
  });

  test('the next button should be disabled', () => {
    expect(nextButton()).toBeDisabled();
  });
});
