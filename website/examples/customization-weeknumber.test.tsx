import React from 'react';

import { getTableFooter, getWeekButton } from '@site/src/test';
import { fireEvent, render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './customization-weeknumber';

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should display the 45th week number', () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe('when the week button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(getWeekButton(45));
    });
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You clicked the week n. 45.');
    });
  });
});
