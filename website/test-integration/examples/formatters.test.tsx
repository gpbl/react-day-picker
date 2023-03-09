import React from 'react';

import { render, screen } from '@testing-library/react';

import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/formatters';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should display the autumn emoji', () => {
  expect(screen.getByRole('img', { name: 'autumn' })).toBeInTheDocument();
});
