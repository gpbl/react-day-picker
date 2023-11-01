import { columnheader, renderApp } from '../../test';
import { SpanishWeekStartsOn } from './SpanishWeekStartsOn';

test('should have "domingo" as first day of week', () => {
  renderApp(<SpanishWeekStartsOn />);
  expect(columnheader('domingo')).toBeInTheDocument();
});
