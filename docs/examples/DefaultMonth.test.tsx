import { freezeTime, grid, renderApp } from '../../test';
import { DefaultMonth } from './DefaultMonth';

const today = new Date(2022, 5, 10);
freezeTime(today);

test('should display September 1979', () => {
  renderApp(<DefaultMonth />);
  expect(grid('September 1979')).toBeInTheDocument();
});
