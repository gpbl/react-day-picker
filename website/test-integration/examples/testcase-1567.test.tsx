import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from '@examples/testcase-1567';

const user = userEvent.setup();

beforeEach(async () => {
  render(<Example />);
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
