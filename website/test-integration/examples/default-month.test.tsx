import React from 'react';
import { getMonthCaption } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import { render } from '@testing-library/react';

import Example from '@examples/default-month';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should display September 1979', () => {
  expect(getMonthCaption()).toHaveTextContent('September 1979');
});
