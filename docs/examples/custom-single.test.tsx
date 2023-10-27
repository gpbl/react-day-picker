import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';
import Example from './custom-single';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(today));
  });
  test('should appear as selected', () => {
    expect(gridcell(today)).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(app()).toHaveTextContent('You selected Thu Nov 25 2021');
  });
  describe('when clicking the day again', () => {
    beforeEach(async () => {
      await user.click(gridcell(today));
    });
    test('should not appear as selected', () => {
      expect(gridcell(today)).not.toHaveAttribute('aria-selected', 'true');
    });
    test('should update the footer', () => {
      expect(app()).not.toHaveTextContent('You selected Thu Nov 25 2021');
    });
  });
});
