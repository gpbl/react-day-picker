import React from 'react';

import { getDayButton, getMonthCaption, getTableFooter } from '@site/src/test';
import { fireEvent, render, screen } from '@testing-library/react';
import { addDays } from 'date-fns';
import tk from 'timekeeper';

import Example from './navigation-controlled';

const today = new Date(2022, 5, 10);
let container: HTMLElement;

function getTodayButton() {
  return screen.getByRole('button', { name: 'Go to Today' });
}

beforeAll(() => {
  tk.freeze(today);
});
afterAll(() => tk.reset());

beforeEach(() => {
  const renderResult = render(<Example />);
  container = renderResult.container;
});

describe('when the "Go to today" button is clicked', () => {
  beforeEach(() => {
    fireEvent.click(getTodayButton());
  });

  test('the button should be disabled', () => {
    expect(getTodayButton()).toBeDisabled();
  });

  test('should display the current month', () => {
    expect(getMonthCaption(container)).toHaveTextContent('June 2022');
  });
});
