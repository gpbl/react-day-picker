import React from 'react';

import { render } from '@testing-library/react';

import { pressArrowDown, pressTab } from 'react-day-picker/test/actions';
import { getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/focus-recursive';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

function setup() {
  render(<Example />);
}

beforeEach(() => {
  setup();
  pressTab();
  pressTab();
  pressTab();
  pressArrowDown();
  pressArrowDown();
  pressArrowDown();
  pressArrowDown();
});

test('the first selected day should have focus', () => {
  expect(getDayButton(new Date(2022, 5, 22))).toHaveFocus();
});
