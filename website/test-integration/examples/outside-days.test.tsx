import React from 'react';

import { getDayButton } from '@site/../packages/react-day-picker/test/selectors';
import { render } from '@testing-library/react';

import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/outside-days';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

describe('when displaying November 2021', () => {
  test('should display the 31st October', () => {
    render(<Example />).container;
    expect(getDayButton(new Date(2021, 9, 31))).toBeInTheDocument();
  });
});
