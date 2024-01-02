import { DefaultMonth } from './DefaultMonth';

import { freezeTime, grid, renderApp } from '../test';

const today = new Date(2022, 5, 10);
freezeTime(today);

test('should display September 1979', () => {
  renderApp(<DefaultMonth />);
  expect(grid('September 1979')).toBeInTheDocument();
});
