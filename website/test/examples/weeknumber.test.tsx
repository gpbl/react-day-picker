import React from 'react';

import { clickWeek, getTableFooter, getWeekButton } from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';

import Example from './weeknumber';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
  test('should display the 45th week number', () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe('when the week button is clicked', () => {
    beforeEach(() => clickWeek(45));
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent(
        'You clicked the week n. 45.'
      );
    });
  });
});
