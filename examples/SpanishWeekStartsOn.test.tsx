import { columnheader } from '@test/elements';
import { renderApp } from '@test/renderApp';

import { SpanishWeekStartsOn } from './SpanishWeekStartsOn';

test('should have "domingo" as first day of week', () => {
  renderApp(<SpanishWeekStartsOn />);
  expect(columnheader('domingo')).toBeInTheDocument();
});
