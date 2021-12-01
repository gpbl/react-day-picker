import React from 'react';

import { render } from '@testing-library/react';

import { clickPrevMonth, getMonthCaption, getMonthTable } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './multiple-months-paged';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when rendering November 2021', () => {
  test('should render 2 tables', () => {
    expect(getMonthTable(0)).toBeInTheDocument();
    expect(getMonthTable(1)).toBeInTheDocument();
  });
  test('the first month should be November', () => {
    expect(getMonthCaption(container)).toHaveTextContent(
      'November 2021'
    );
  });
  test('the first month should be December', () => {
    expect(getMonthCaption(container, 1)).toHaveTextContent(
      'December 2021'
    );
  });
  // Test pagination
  describe('when the previous month button is clicked', () => {
    beforeEach(() => clickPrevMonth());
    test('the first month should be October', () => {
      expect(getMonthCaption(container)).toHaveTextContent(
        'September 2021'
      );
    });
    test('the month caption should be November', () => {
      expect(getMonthCaption(container, 1)).toHaveTextContent(
        'October 2021'
      );
    });
  });
});
