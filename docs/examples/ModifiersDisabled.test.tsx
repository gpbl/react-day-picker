import { render } from '@testing-library/react';
import { freezeTime, gridcell } from '../../test';
import { ModifiersDisabled } from './ModifiersDisabled';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 12),
  new Date(2022, 5, 20)
];
const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  render(<ModifiersDisabled />);
});

test.each(days)('the day %s should be disabled', (day) => {
  expect(gridcell(day)).toHaveAttribute('aria-disabled', 'true');
});
