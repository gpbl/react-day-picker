import React from 'react';

import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './customization-fixedweeks';

const today = new Date(2021, 10, 25);

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should render 7 rows', () => {
    const { container } = render(<Example />);
    const rowElements = container.getElementsByTagName('tr');
    expect(rowElements).toHaveLength(7);
  });
});
