import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/styling-css';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('the caption should use the custom class name', () => {
  expect(container.getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
