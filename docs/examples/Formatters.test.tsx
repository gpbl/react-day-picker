import { Formatters } from '../examples/Formatters';

import { app, freezeTime, renderApp } from '../../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

test('should display the autumn emoji', () => {
  renderApp(<Formatters />);
  expect(app()).toHaveTextContent('🍂');
});
