import React from 'react';

import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './styling-inline';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('the caption should apply the custom style', () => {
  expect(
    container.getElementsByClassName('rdp-caption')[0]
  ).toHaveStyle({
    color: 'red'
  });
});
