import React from 'react';

import Example from '@examples/custom-multiple';
import { clickDay, getDayButton, getTableFooter } from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when a day is clicked', () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(() => clickDay(day1));
  test('should appear as selected', () => {
    expect(getDayButton(day1)).toHaveAttribute('aria-pressed', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected 1 days.');
  });
  describe('when a second day is clicked', () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(() => clickDay(day2));
    test('the first day should appear as selected', () => {
      expect(getDayButton(day1)).toHaveAttribute('aria-pressed', 'true');
    });
    test('the second day should appear as selected', () => {
      expect(getDayButton(day2)).toHaveAttribute('aria-pressed', 'true');
    });
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You selected 2 days.');
    });
  });
});
