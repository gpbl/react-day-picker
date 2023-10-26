import { screen } from '@testing-library/react';
import { app, axe, freezeTime, grid, renderApp } from '../../test';
import Example from './numbering-system';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});
test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
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
