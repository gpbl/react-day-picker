import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/fixedweeks';

import { render } from '@testing-library/react';

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
