import React from 'react';

import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './custom-components-day';
import { getDaysInMonth } from 'date-fns';

const today = new Date(2021, 10, 25); // 25th November

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

test('should render time elements', () => {
  const { container } = render(<Example />);
  const timeElements = container.getElementsByTagName('time');
  expect(timeElements).toHaveLength(getDaysInMonth(today));
});
