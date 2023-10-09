import { freezeBeforeAll } from '@site/test/utils';
import { render, screen } from '@testing-library/react';

import Example from '@examples/formatters';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('should display the autumn emoji', () => {
  expect(screen.getByRole('img', { name: 'autumn' })).toBeInTheDocument();
});
