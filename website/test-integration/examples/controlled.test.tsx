import React from 'react';

import { axe } from '@site/test/axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getMonthCaption } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/controlled';

const today = new Date(2022, 5, 10);

function getTodayButton() {
  return screen.getByRole('button', { name: 'Go to Today' });
}

freezeBeforeAll(today);
const user = userEvent.setup();

test('should not have AXE violations', async () => {
  const html = render(<Example />).container;
  expect(await axe(html)).toHaveNoViolations();
});

describe('when the "Go to today" button is clicked', () => {
  beforeEach(async () => {
    render(<Example />);
    await user.click(getTodayButton());
  });
  test('the button should be disabled', async () => {
    expect(getTodayButton()).toBeDisabled();
  });
  test('should display the current month', () => {
    expect(getMonthCaption()).toHaveTextContent('June 2022');
  });
});
