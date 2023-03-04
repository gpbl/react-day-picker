import React from 'react';

import { axe } from '@site/test/axe';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  getDayButton,
  getFocusedElement
} from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/focus-recursive';

const today = new Date(2022, 5, 10);
const user = userEvent.setup();
freezeBeforeAll(today);

let container: HTMLElement;

beforeEach(async () => {
  container = render(<Example />).container;
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

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});
