import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays, format } from 'date-fns';

import {
  getAllSelectedDays,
  getDayButton
} from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/useinput';

const today = new Date(2021, 10, 15);
freezeBeforeAll(today);

const yday = addDays(today, -1);
const user = userEvent.setup();
beforeEach(() => {
  render(<Example />);
});

function getInput(): HTMLInputElement {
  return screen.getByRole('textbox');
}

test('today should be selected', () => {
  expect(getDayButton(today)).toHaveAttribute('aria-pressed', 'true');
});

test('the input field should display today', () => {
  expect(getInput()).toHaveValue(format(today, 'PP'));
});

describe('when yesterday is clicked', () => {
  beforeEach(async () => user.click(getDayButton(yday)));
  test('the input field should display yesterday', () => {
    expect(getInput()).toHaveValue(format(yday, 'PP'));
  });
  describe('when today is typed in', () => {
    beforeEach(async () => {
      await user.clear(getInput());
      await user.type(getInput(), format(today, 'PP'));
    });
    test('today should be selected', () => {
      expect(getDayButton(today)).toHaveAttribute('aria-pressed', 'true');
    });
  });
  describe('when the input is cleared', () => {
    beforeEach(async () => user.clear(getInput()));
    test('no day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(0);
    });
  });
});
