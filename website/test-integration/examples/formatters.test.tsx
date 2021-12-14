import React from 'react';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/formatters';

import { render, screen } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  test('should display the autumn emoji', () => {
    expect(screen.getByRole('img', { name: 'autumn' })).toBeInTheDocument();
  });
});
