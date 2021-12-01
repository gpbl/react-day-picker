import React from 'react';

import { render } from '@testing-library/react';

import { clickDay, getDayButton, getTableFooter } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './multiple';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
beforeEach(() => {
  render(<Example />);
});

describe('when a day is clicked', () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(() => clickDay(day1));
  test('should appear as selected', () => {
    expect(getDayButton(day1)).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'You selected 1 day(s).'
    );
  });
  describe('when a second day is clicked', () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(() => clickDay(day2));
    test('the first day should appear as selected', () => {
      expect(getDayButton(day1)).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    });
    test('the second day should appear as selected', () => {
      expect(getDayButton(day2)).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    });
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent(
        'You selected 2 day(s).'
      );
    });
  });
});
