import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton, getTableFooter } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/custom-single';

const user = userEvent.setup();
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(() => user.click(getDayButton(day)));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected Mon Nov 01 2021.');
  });
});
