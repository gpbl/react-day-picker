import { app, grid, gridcell } from '@test/elements';
import { renderApp } from '@test/renderApp';
import { user } from '@test/user';
import { act, screen } from '@testing-library/react';

import { Disabled } from './Disabled';

const today = new Date(2022, 5, 10);
const firstOfMonth = new Date(2022, 5, 1);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  renderApp(<Disabled />);
  return act(() => gridcell(firstOfMonth).focus());
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
    test('should still display the same month', () => {
      expect(grid('June 2022')).toBeInTheDocument();
    });
  });
});
