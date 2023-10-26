import { render } from '@testing-library/react';
import { freezeTime, gridcell } from '../../test';
import Example from './modifiers-disabled';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 12),
  new Date(2022, 5, 20)
];
const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should be disabled', (day) => {
  expect(gridcell(day)).toHaveAttribute('aria-disabled', 'true');
});
