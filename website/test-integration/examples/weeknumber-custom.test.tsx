import React from 'react';

import { freezeBeforeAll } from '@site/test/utils';
import { render, screen } from '@testing-library/react';

import Example from '@examples/weeknumber-custom';

const today = new Date(2022, 0, 1);
freezeBeforeAll(today);

beforeEach(() => render(<Example />));

describe('when displaying January 2022', () => {
  test('should display the 53th week', () => {
    const week53 = screen.getByRole('row', {
      name: /^W53/
    });
    expect(week53).toBeInTheDocument();
  });
});
