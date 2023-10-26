import { columnheader, renderApp } from '../../test';
import Example from './spanish-week-starts-on';

test('should have "domingo" as first day of week', () => {
  renderApp(<Example />);
  expect(columnheader('domingo')).toBeInTheDocument();
});
