import { format } from 'date-fns';
import { screen } from '@testing-library/react';

/** Return the button with the specified day. */
export function getDayButton(day: Date) {
  return screen.getByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

/** Return the footer of the table */
// TODO: support multiple tables
export function getTableFooter() {
  return screen.getByRole('table').querySelector('tfoot');
}
