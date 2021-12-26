import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/custom-day';

import { render } from '@testing-library/react';
import { getDaysInMonth } from 'date-fns';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should render time elements', () => {
  const timeElements = container.getElementsByTagName('time');
  expect(timeElements).toHaveLength(getDaysInMonth(today));
});
