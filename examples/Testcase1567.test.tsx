import { renderApp } from '@test/renderApp';
import { user } from '@test/user';
import { screen } from '@testing-library/react';

/* eslint-disable jest/no-disabled-tests */
import { Testcase1567 } from './Testcase1567';

beforeEach(async () => {
  renderApp(<Testcase1567 />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.tab();
});

test('the button should have focus', () => {
  expect(
    screen.getByRole('button', { name: 'I should be focusable' })
  ).toHaveFocus();
});
