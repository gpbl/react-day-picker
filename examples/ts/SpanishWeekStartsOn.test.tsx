import { SpanishWeekStartsOn } from './SpanishWeekStartsOn';

import { columnheader, renderApp } from '../../test';

test('should have "domingo" as first day of week', () => {
  renderApp(<SpanishWeekStartsOn />);
  expect(columnheader('domingo')).toBeInTheDocument();
});
