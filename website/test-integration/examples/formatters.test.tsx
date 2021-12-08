import React from 'react';

import Example from '../../examples/formatters';
import { freezeBeforeAll } from '@test/utils';
import { render, screen } from '@testing-library/react';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
  test('should display the autumn emoji', () => {
    expect(screen.getByRole('img', { name: 'autumn' })).toBeInTheDocument();
  });
});
