import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton, getTableFooter } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/single-required';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
const user = userEvent.setup();

beforeEach(() => {
  render(<Example />);
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => user.click(getDayButton(day)));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'You selected November 1st, 2021.'
    );
  });
  describe('when the day is clicked again', () => {
    beforeEach(async () => user.click(getDayButton(day)));
    test('should appear as selected', () => {
      expect(getDayButton(day)).toHaveAttribute('aria-pressed', 'true');
    });
  });
});
