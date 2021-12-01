import React from 'react';

import { render, screen } from '@testing-library/react';

import { freezeBeforeAll } from '../src/test/utils';
import Example from './formatters';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
  test('should display the autumn emoji', () => {
    expect(
      screen.getByRole('img', { name: 'autumn' })
    ).toBeInTheDocument();
  });
});
