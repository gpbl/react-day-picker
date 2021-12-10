import React from 'react';

import Example from '@examples/custom-single';
import {
  clickDay,
  getDayButton,
  getTableFooter
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';
import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(() => clickDay(day));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected Mon Nov 01 2021.');
  });
});
