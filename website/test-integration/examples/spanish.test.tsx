import React from 'react';

import { render } from '@testing-library/react';

import { getMonthCaption } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/spanish';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should localize the caption in Spanish', () => {
  expect(getMonthCaption()).toHaveTextContent('noviembre 2021');
});
