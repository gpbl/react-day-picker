import { app } from '@/test/elements';
import { renderApp } from '@/test/renderApp';

import { Formatters } from './Formatters';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

test('should display the autumn emoji', () => {
  renderApp(<Formatters />);
  expect(app()).toHaveTextContent('🍂');
});
