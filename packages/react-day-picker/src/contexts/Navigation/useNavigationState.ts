import { useCalendar } from 'contexts/Calendar';

export type NavigationState = [
  /** The month DayPicker is navigating at */
  month: Date,
  /** Go to the specified month. */
  goToMonth: (month: Date) => void
];

/**
 * Controls the navigation state.
 * @deprecated Use the {@link CalendarContext} to access to the navigation state.
 */
export function useNavigationState(): NavigationState {
  const { calendar, goToMonth } = useCalendar();
  return [calendar.months[0].month, goToMonth];
}
