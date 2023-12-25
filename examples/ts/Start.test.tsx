import { Start } from './Start';

import {
  app,
  axe,
  freezeTime,
  gridcell,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(async () => {
  renderApp(<Start />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should display the next month button', async () => {
  expect(nextButton()).toBeVisible();
  expect(nextButton()).not.toHaveAttribute('aria-disabled');
  expect(nextButton()).not.toHaveAttribute('aria-disabled', 'true');
});

test('should display the previous month buttons', async () => {
  expect(previousButton()).toBeVisible();
  expect(previousButton()).not.toHaveAttribute('aria-disabled');
  expect(previousButton()).not.toHaveAttribute('aria-disabled', 'true');
});

const day = new Date(2021, 10, 1);

describe('when a day is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test('should appear as selected', () => {
    expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
});
