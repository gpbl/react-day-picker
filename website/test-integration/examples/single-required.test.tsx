import React from 'react';

import { axe } from '@site/test/axe';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton, getTableFooter } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/single-required';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
const user = userEvent.setup();

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => user.click(getDayButton(day)));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent(
      'You selected November 1st, 2021.'
    );
  });
  describe('when the day is clicked again', () => {
    beforeEach(async () => user.click(getDayButton(day)));
    test('should appear as selected', () => {
      expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
    });
  });
});
