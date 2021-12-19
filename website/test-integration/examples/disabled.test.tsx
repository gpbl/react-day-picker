import React from 'react';
import {
  focusDay,
  getMonthCaption,
  pressArrowLeft,
  queryPrevButton
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/disabled';

import { render } from '@testing-library/react';
import { setDate } from 'date-fns';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />).container;
});

test('should not display the previous button', () => {
  expect(queryPrevButton()).not.toBeInTheDocument();
});

describe('when the first day is focused', () => {
  const firstDay = setDate(today, 1);
  beforeEach(() => {
    focusDay(firstDay);
  });
  describe('when the Arrow Left is pressed', () => {
    beforeEach(pressArrowLeft);
    test('should still display the same month', () => {
      expect(getMonthCaption()).toHaveTextContent('June 2022');
    });
  });
});
describe('when the last day is focused', () => {
  describe('when the Arrow Right is pressed', () => {
    beforeEach(pressArrowLeft);
    test('should still display the same month', () => {
      expect(getMonthCaption()).toHaveTextContent('June 2022');
    });
  });
});
