import { OutsideDays } from './OutsideDays';
import { screen } from '@testing-library/react';

import { app, axe, freezeTime, renderApp } from '../../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<OutsideDays />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when displaying a month with outside days', () => {
  test('should display the outside day', () => {
    // TODO: verify this test actually works
    expect(screen.getByRole('gridcell', { name: '31' })).toBeInTheDocument();
  });
});
