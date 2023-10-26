import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';
import Example from './start';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(async () => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
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
