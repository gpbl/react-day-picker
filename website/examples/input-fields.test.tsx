import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays, format } from 'date-fns';

import {
  clickDay,
  getAllSelectedDays,
  getDayButton
} from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import Example from './input-fields';

const today = new Date(2021, 10, 15);
freezeBeforeAll(today);

const yday = addDays(today, -1);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

function getInput(): HTMLInputElement {
  return screen.getByRole('textbox');
}

test('today should be selected', () => {
  expect(getDayButton(today)).toHaveAttribute(
    'aria-pressed',
    'true'
  );
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
      userEvent.type(
        getInput(),
        `{selectall}{del}${format(today, 'PP')}`
      );
    });
    test('today should be selected', () => {
      expect(getDayButton(today)).toHaveAttribute(
        'aria-pressed',
        'true'
      );
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
