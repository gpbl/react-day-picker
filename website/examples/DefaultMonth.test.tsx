import { grid } from '@/test/elements';
import { renderApp } from '@/test/renderApp';

import { DefaultMonth } from './DefaultMonth';

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

test('should display September 1979', () => {
  renderApp(<DefaultMonth />);
  expect(grid('September 1979')).toBeInTheDocument();
});
