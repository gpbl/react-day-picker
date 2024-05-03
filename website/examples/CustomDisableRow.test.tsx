import { CustomDisableRow } from './CustomDisableRow';
import { render, screen } from '@testing-library/react';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  render(<CustomDisableRow />);
});

test('should have only 3 rows', () => {
  expect(screen.getAllByRole('row')).toHaveLength(3);
});
