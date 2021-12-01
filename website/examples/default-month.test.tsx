import React from 'react';

import { render } from '@testing-library/react';

import { getMonthCaption } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './default-month';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should display September 1979', () => {
  expect(getMonthCaption(container)).toHaveTextContent(
    'September 1979'
  );
});
