import { screen } from '@testing-library/react';
import { CalendarProvider, useCalendar } from './CalendarContext';
import { renderDayPickerHook, renderWithContext } from '../../../test/render';

it('should render the children', () => {
  renderWithContext(
    <CalendarProvider>
      <div>Test</div>
    </CalendarProvider>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});

describe('getNavigationMonths', () => {
  it('should return undefined if no fromDate is provided', () => {
    const result = renderDayPickerHook(useCalendar, { fromDate: undefined });
    expect(result.current.getDropdownMonths()).toBeUndefined();
  });

  it('should return undefined if no toDate is provided', () => {
    const result = renderDayPickerHook(useCalendar, { toDate: undefined });
    expect(result.current.getDropdownMonths()).toBeUndefined();
  });

  it('should return an array of months between the fromDate and toDate', () => {
    const dayPicker = {
      fromDate: new Date(2020, 1, 1),
      toDate: new Date(2023, 2, 1)
    };
    const result = renderDayPickerHook(useCalendar, dayPicker);
    const navMonths = result.current.getDropdownMonths();
    expect(navMonths).toHaveLength(12);
    expect(navMonths?.[0]).toEqual([0, 'January']);
    expect(navMonths?.[navMonths.length - 1]).toEqual([11, 'December']);
  });
});
