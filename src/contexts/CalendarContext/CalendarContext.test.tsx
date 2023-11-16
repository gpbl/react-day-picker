import { render, screen } from '@testing-library/react';
import { CalendarProvider } from './CalendarContext';

it('should render the children', () => {
  render(
    <CalendarProvider>
      <div>Test</div>
    </CalendarProvider>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});
