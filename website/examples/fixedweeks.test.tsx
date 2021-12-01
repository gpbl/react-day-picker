import React from 'react';

import { render } from '@testing-library/react';

import { freezeBeforeAll } from '../src/test/utils';
import Example from './fixedweeks';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should render 7 rows', () => {
  const rowElements = container.getElementsByTagName('tr');
  expect(rowElements).toHaveLength(7);
});
