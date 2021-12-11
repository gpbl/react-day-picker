import React from 'react';
import { getMonthCaption } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/spanish';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should localize the caption in Spanish', () => {
  expect(getMonthCaption()).toHaveTextContent('noviembre 2021');
});
