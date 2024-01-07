import { grid } from '@test/elements';
import { renderApp } from '@test/renderApp';
import { screen } from '@testing-library/react';

import { NumberingSystem } from './NumberingSystem';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<NumberingSystem />);
});

test('should localize the year', () => {
  expect(grid('نوفمبر ٢٬٠٢١')).toBeInTheDocument();
});
test('should localize the days', () => {
  expect(screen.getByText('أحد')).toBeInTheDocument();
});
test('should localize the week numbers', () => {
  expect(screen.getByText('٤٥')).toBeInTheDocument();
});
