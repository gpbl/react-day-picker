import { screen } from '@testing-library/react';
import {
  app,
  axe,
  freezeTime,
  previousButton,
  renderApp,
  user
} from '../../test';
import Example from './multiple-months';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should render 2 grids', () => {
  expect(screen.getAllByRole('grid')).toHaveLength(2);
});

test('the first grid should be November', () => {
  const grids = screen.getAllByRole('grid');
  expect(grids[0]).toHaveAccessibleName('November 2021');
});

test('the second grid should be December', () => {
  const grids = screen.getAllByRole('grid');
  expect(grids[1]).toHaveAccessibleName('December 2021');
});

// Test pagination
describe('when the previous month button is clicked', () => {
  beforeEach(() => user.click(previousButton()));
  test('the first month should be October', () => {
    const grids = screen.getAllByRole('grid');
    expect(grids[0]).toHaveAccessibleName('October 2021');
  });
  test('the first month should be November', () => {
    const grids = screen.getAllByRole('grid');
    expect(grids[1]).toHaveAccessibleName('November 2021');
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
});
