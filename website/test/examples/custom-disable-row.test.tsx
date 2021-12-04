import React from 'react';

import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';

import Example from './custom-disable-row';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should render only 3 rows', () => {
  const rowElements = container.getElementsByTagName('tr');
  expect(rowElements).toHaveLength(3);
});
