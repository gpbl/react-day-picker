import { WeeknumberCustom } from './WeeknumberCustom';

import { renderApp, rowheader } from '../test';

beforeEach(() => {
  renderApp(<WeeknumberCustom />);
});

test('should display the 1st week (even if December)', () => {
  expect(rowheader('Week 1')).toBeInTheDocument();
});
