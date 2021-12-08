import React from 'react';

import Example from '../../examples/numbering-system';
import { freezeBeforeAll } from '@test/utils';
import { render, screen } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
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
