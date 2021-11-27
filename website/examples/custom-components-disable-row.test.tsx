import React from 'react';

import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './custom-components-disable-row';

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25); // 25th November
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should render only 3 rows', () => {
    const { container } = render(<Example />);
    const rowElements = container.getElementsByTagName('tr');
    expect(rowElements).toHaveLength(3);
  });
});
