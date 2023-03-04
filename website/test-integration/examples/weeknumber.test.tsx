import React from 'react';

import { axe } from '@site/test/axe';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getTableFooter, getWeekButton } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/weeknumber';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

const user = userEvent.setup();

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when displaying November 2021', () => {
  test('should display the 45th week number', () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe('when the week button is clicked', () => {
    beforeEach(async () => user.click(getWeekButton(45)));
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You clicked the week n. 45.');
    });
  });
});
