import React from 'react';

import { render } from '@testing-library/react';

import { freezeBeforeAll } from '../src/test/utils';
import Example from './rtl';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should have the rtl attribute', () => {
  expect(
    container.getElementsByClassName('rdp')[0]
  ).toHaveAttribute('dir', 'rtl');
});
