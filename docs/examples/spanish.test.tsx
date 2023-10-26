import { app, axe, freezeTime, grid, renderApp } from '../../test';
import Example from './spanish';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should localize the caption in Spanish', () => {
  expect(grid()).toHaveAccessibleName('noviembre 2021');
});
