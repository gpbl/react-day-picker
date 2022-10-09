import React from 'react';

import { render, screen } from '@testing-library/react';

import { pressTab } from 'react-day-picker/test/actions';

import Example from '@examples/testcase-1567';

beforeEach(() => {
  render(<Example />);
  pressTab();
  pressTab();
  pressTab();
  pressTab();
});

test('the button should have focus', () => {
  expect(
    screen.getByRole('button', { name: 'I should be focusable' })
  ).toHaveFocus();
});
