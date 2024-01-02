import { Rtl } from './Rtl';

import {
  app,
  axe,
  freezeTime,
  grid,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Rtl />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should have the rtl dir attribute', () => {
  expect(app().firstChild).toHaveAttribute('dir', 'rtl');
});

describe('when clicking the next month button', () => {
  test('should display the next month', async () => {
    await user.click(nextButton());
    expect(grid()).toHaveAccessibleName('ديسمبر 2021');
  });
});

describe('when clicking the previous month button', () => {
  test('should display the previous month', async () => {
    await user.click(previousButton());
    expect(grid()).toHaveAccessibleName('أكتوبر 2021');
  });
});
