import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';

import Example from './single-required';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test('should appear as selected', () => {
    expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(app()).toHaveTextContent('You selected November 1st, 2021');
  });
  describe('when the day is clicked again', () => {
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test('should appear as selected', () => {
      expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
    });
  });
});
