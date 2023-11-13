import { Testcase1567 } from '../examples/Testcase1567';
import { screen } from '@testing-library/react';

import { renderApp, user } from '../../test';

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
