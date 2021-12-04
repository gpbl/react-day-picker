import React from 'react';

import { getMonthCaption } from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';

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
