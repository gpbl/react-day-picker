import React from 'react';

import { getMonthCaption } from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';

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
