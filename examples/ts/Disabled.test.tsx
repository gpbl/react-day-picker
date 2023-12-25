import { Disabled } from './Disabled';
import { act, screen } from '@testing-library/react';

import {
  app,
  axe,
  freezeTime,
  grid,
  gridcell,
  renderApp,
  user
} from '../../test';

const today = new Date(2022, 5, 10);
const firstOfMonth = new Date(2022, 5, 1);
freezeTime(today);

beforeEach(async () => {
  renderApp(<Disabled />);
  return act(() => gridcell(firstOfMonth).focus());
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should not display the previous button', () => {
  expect(
    screen.queryByRole('button', { name: 'Go to previous month' })
  ).not.toBeInTheDocument();
});

describe('when the first day is focused', () => {
  describe('when the Arrow Left is pressed', () => {
    beforeEach(async () => {
      await act(() => user.type(app(), '{arrowleft}'));
    });
    test('should be accessible', async () => {
      expect(await axe(app())).toHaveNoViolations();
    });
    test('should still display the same month', () => {
      expect(grid('June 2022')).toBeInTheDocument();
    });
  });
});
describe('when the last day is focused', () => {
  describe('when the Arrow Right is pressed', () => {
    beforeEach(async () => {
      await act(() => user.type(app(), '{arrowleft}'));
    });

    test('should be accessible', async () => {
      expect(await axe(app())).toHaveNoViolations();
    });
    test('should still display the same month', () => {
      expect(grid('June 2022')).toBeInTheDocument();
    });
  });
});
