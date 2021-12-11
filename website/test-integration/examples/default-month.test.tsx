import React from 'react';
import { getMonthCaption } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/default-month';

import { render } from '@testing-library/react';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should display September 1979', () => {
  expect(getMonthCaption()).toHaveTextContent('September 1979');
});
