import { Fixedweeks } from '../examples/Fixedweeks';
import { screen } from '@testing-library/react';

import { app, axe, freezeTime, renderApp } from '../../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Fixedweeks />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should render 7 rows', () => {
  expect(screen.getAllByRole('row')).toHaveLength(7);
});
