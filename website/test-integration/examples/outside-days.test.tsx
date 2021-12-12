import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/outside-days';

import { render } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  test('should display the 31st October ', () => {
    const firstDayElement = container
      .getElementsByTagName('tr')[1]
      .getElementsByTagName('td')[0];
    expect(firstDayElement).toHaveAccessibleName('31st October (Sunday)');
  });
});
