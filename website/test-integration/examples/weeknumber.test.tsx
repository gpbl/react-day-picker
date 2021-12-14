import React from 'react';
import {
  clickWeek,
  getTableFooter,
  getWeekButton
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/weeknumber';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  test('should display the 45th week number', () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe('when the week button is clicked', () => {
    beforeEach(() => clickWeek(45));
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You clicked the week n. 45.');
    });
  });
});
