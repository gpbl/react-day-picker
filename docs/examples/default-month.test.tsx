import { freezeTime, grid, renderApp } from '../../test';
import Example from './default-month';

const today = new Date(2022, 5, 10);
freezeTime(today);

test('should display September 1979', () => {
  renderApp(<Example />);
  expect(grid('September 1979')).toBeInTheDocument();
});
