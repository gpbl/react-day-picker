import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setDate } from 'date-fns';

import {
  getDayButton,
  getFocusedElement,
  getMonthCaption,
  queryPrevButton
} from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/disabled';

const today = new Date(2022, 5, 10);
const user = userEvent.setup();
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />).container;
});

test('should not display the previous button', () => {
  expect(queryPrevButton()).not.toBeInTheDocument();
});

describe('when the first day is focused', () => {
  const firstDay = setDate(today, 1);
  beforeEach(async () => {
    getDayButton(firstDay).focus();
  });
  describe('when the Arrow Left is pressed', () => {
    beforeEach(async () => {
      await user.type(getFocusedElement(), '{arrowleft}');
    });
    test('should still display the same month', () => {
      expect(getMonthCaption()).toHaveTextContent('June 2022');
    });
  });
});
describe('when the last day is focused', () => {
  describe('when the Arrow Right is pressed', () => {
    beforeEach(async () => {
      await user.type(getFocusedElement(), '{arrowleft}');
    });
    test('should still display the same month', () => {
      expect(getMonthCaption()).toHaveTextContent('June 2022');
    });
  });
});
