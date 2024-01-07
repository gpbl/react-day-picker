import { activeElement, gridcell } from '../test/elements';
import { renderApp } from '../test/renderApp';
import { user } from '../test/user';
import { FocusRecursive } from './FocusRecursive';

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  renderApp(<FocusRecursive />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(activeElement(), '{arrowdown}');
  await user.type(activeElement(), '{arrowdown}');
  await user.type(activeElement(), '{arrowdown}');
  await user.type(activeElement(), '{arrowdown}');
});

test('the first selected day should have focus', () => {
  expect(gridcell(new Date(2022, 5, 22))).toHaveFocus();
});
