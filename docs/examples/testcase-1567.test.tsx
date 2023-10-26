import { screen } from '@testing-library/react';
import { renderApp, user } from '../../test';
import Example from './testcase-1567';

beforeEach(async () => {
  renderApp(<Example />);
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
