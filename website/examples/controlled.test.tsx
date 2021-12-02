import React from 'react';

import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';

import { getMonthCaption } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './controlled';

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
    expect(getMonthCaption(container)).toHaveTextContent(
      'June 2022'
    );
  });
});
