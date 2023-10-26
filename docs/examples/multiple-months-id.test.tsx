import { freezeTime, grid, renderApp } from '../../test';
import Example from './multiple-months-id';

const today = new Date(2021, 10, 25);
freezeTime(today);

test('the table ids should include the display index', () => {
  renderApp(<Example />);
  expect(grid('November 2021')).toHaveAttribute(
    'id',
    'calendar_example-grid-0'
  );
  expect(grid('December 2021')).toHaveAttribute(
    'id',
    'calendar_example-grid-1'
  );
});
