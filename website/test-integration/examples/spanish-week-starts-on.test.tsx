import React from 'react';

import { render } from '@testing-library/react';

import { getMonthCaption, getMonthGrid } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/spanish-week-starts-on';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should have "Domingo" as first day of week', () => {
  expect(getMonthGrid().firstChild.firstChild.firstChild).toHaveAccessibleName(
    'domingo'
  );
});
