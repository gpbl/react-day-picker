import { screen } from '@testing-library/react';
import { app, axe, freezeTime, renderApp } from '../../test';
import { CustomDisableRow } from './CustomDisableRow';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<CustomDisableRow />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should have only 3 rows', () => {
  expect(screen.getAllByRole('row')).toHaveLength(3);
});
