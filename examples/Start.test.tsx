import { gridcell, nextButton, previousButton } from '../test/elements';
import { renderApp } from '../test/renderApp';
import { user } from '../test/user';
import { Start } from './Start';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  renderApp(<Start />);
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
});
