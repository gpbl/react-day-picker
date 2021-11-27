import React from 'react';

import { render, fireEvent, act } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-today';
import { getDayButton, getTableFooter } from '@site/src/test';
import { addDays } from 'date-fns';

const today = new Date(2022, 5, 10);

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe('when the today date is clicked', () => {
  beforeEach(() => {
    act(() => {
      fireEvent.click(getDayButton(today));
    });
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You clicked the today’s date');
  });
});

describe('when another date is clicked', () => {
  const date = addDays(today, 1);
  beforeEach(() => {
    fireEvent.click(getDayButton(date));
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'Try clicking the today’s date.'
    );
  });
});
