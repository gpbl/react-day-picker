import React from 'react';

import { axe } from '@site/test/axe';
import { user } from '@site/test/user';
import { freezeBeforeAll } from '@site/test/utils';
import { act, render } from '@testing-library/react';

import {
  getMonthCaption,
  getNextButton,
  getPrevButton
} from 'react-day-picker/test/selectors';

import Example from '@examples/rtl';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});
test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('should have the rtl attribute', () => {
  expect(container.firstChild).toHaveAttribute('dir', 'rtl');
});

describe('when clicking the next month button', () => {
  beforeEach(async () => {
    await act(() => user.click(getNextButton()));
  });
  test('should display the next month', () => {
    expect(getMonthCaption()).toHaveTextContent('ديسمبر 2021');
  });
});

describe('when clicking the previous month button', () => {
  beforeEach(async () => {
    await act(() => user.click(getPrevButton()));
  });
  test('should display the previous month', () => {
    expect(getMonthCaption()).toHaveTextContent('أكتوبر 2021');
  });
});
