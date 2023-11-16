import { screen } from '@testing-library/react';
import { CalendarProvider } from './CalendarContext';
import { renderWithContext } from '../../../test/render';

it('should render the children', () => {
  renderWithContext(
    <CalendarProvider>
      <div>Test</div>
    </CalendarProvider>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});
