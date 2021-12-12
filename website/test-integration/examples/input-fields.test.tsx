import React from 'react';
import {
  clickDay,
  getAllSelectedDays,
  getDayButton
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/input-fields';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays, format } from 'date-fns';

const today = new Date(2021, 10, 15);
freezeBeforeAll(today);

const yday = addDays(today, -1);

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
  beforeEach(() => {
    clickDay(yday);
  });
  test('the input field should display yesterday', () => {
    expect(getInput()).toHaveValue(format(yday, 'PP'));
  });
  describe('when today is typed in', () => {
    beforeEach(() => {
      userEvent.type(getInput(), `{selectall}{del}${format(today, 'PP')}`);
    });
    test('today should be selected', () => {
      expect(getDayButton(today)).toHaveAttribute('aria-pressed', 'true');
    });
  });
  describe('when the input is emptied', () => {
    beforeEach(() => {
      userEvent.type(getInput(), `{selectall}{del}`);
    });
    test('no day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(0);
    });
  });
});
