import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/rtl';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should have the rtl attribute', () => {
  expect(container.getElementsByClassName('rdp')[0]).toHaveAttribute(
    'dir',
    'rtl'
  );
});
