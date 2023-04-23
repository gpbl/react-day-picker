import React from 'react';

import { axe } from '@site/test/axe';
import { user } from '@site/test/user';
import { freezeBeforeAll } from '@site/test/utils';
import { act, render } from '@testing-library/react';

import {
  getDayButton,
  getFocusedElement
} from 'react-day-picker/test/selectors';

import Example from '@examples/focus-recursive';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;

beforeEach(async () => {
  container = render(<Example />).container;
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.type(getFocusedElement(), '{arrowdown}'));
  await act(() => user.type(getFocusedElement(), '{arrowdown}'));
  await act(() => user.type(getFocusedElement(), '{arrowdown}'));
  await act(() => user.type(getFocusedElement(), '{arrowdown}'));
});

test('the first selected day should have focus', () => {
  expect(getDayButton(new Date(2022, 5, 22))).toHaveFocus();
});

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});
