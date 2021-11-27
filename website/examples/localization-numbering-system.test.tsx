import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './localization-numbering-system';

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should localize the year', () => {
    expect(screen.getByText('نوفمبر ٢٬٠٢١')).toBeInTheDocument();
  });
  test('should localize the days', () => {
    expect(screen.getByText('أحد')).toBeInTheDocument();
  });
  test('should localize the week numbers', () => {
    expect(screen.getByText('٤٥')).toBeInTheDocument();
  });
});
