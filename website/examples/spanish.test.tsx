import React from 'react';

import { render } from '@testing-library/react';

import { getMonthCaption } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './spanish';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should localize the caption in Spanish', () => {
  expect(getMonthCaption(container)).toHaveTextContent(
    'noviembre 2021'
  );
});
