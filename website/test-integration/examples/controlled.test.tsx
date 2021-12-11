import React from 'react';
import { getMonthCaption } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/controlled';

import { fireEvent, render, screen } from '@testing-library/react';

let container: HTMLElement;
const today = new Date(2022, 5, 10);

function getTodayButton() {
  return screen.getByRole('button', { name: 'Go to Today' });
}

freezeBeforeAll(today);

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
    expect(getMonthCaption()).toHaveTextContent('June 2022');
  });
});
