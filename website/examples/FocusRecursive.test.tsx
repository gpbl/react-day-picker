import { FocusRecursive } from './FocusRecursive';

import { app, axe, freezeTime, gridcell, renderApp, user } from '../test';
import { getFocusedElement } from '../test/selectors';

const today = new Date(2022, 5, 10);
freezeTime(today);

beforeEach(async () => {
  renderApp(<FocusRecursive />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
  await user.type(getFocusedElement(), '{arrowdown}');
});

test('the first selected day should have focus', () => {
  expect(gridcell(new Date(2022, 5, 22))).toHaveFocus();
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});
