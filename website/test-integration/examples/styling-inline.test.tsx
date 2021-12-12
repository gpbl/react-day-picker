import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/styling-inline';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('the caption should apply the custom style', () => {
  expect(container.getElementsByClassName('rdp-caption')[0]).toHaveStyle({
    color: 'red'
  });
});
