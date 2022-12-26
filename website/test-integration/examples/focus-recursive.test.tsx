import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton, getFocusedElement } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/focus-recursive';

const today = new Date(2022, 5, 10);
const user = userEvent.setup();
freezeBeforeAll(today);

beforeEach(async () => {
  render(<Example />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
});

test('the first selected day should have focus', () => {
  expect(getDayButton(new Date(2022, 5, 22))).toHaveFocus();
});
