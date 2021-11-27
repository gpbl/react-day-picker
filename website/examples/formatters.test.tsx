import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './formatters';

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should display the autumn emoji', () => {
    expect(screen.getByRole('img', { name: 'autumn' })).toBeInTheDocument();
  });
});
