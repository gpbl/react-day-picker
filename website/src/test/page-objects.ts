import { format } from 'date-fns';
import { screen } from '@testing-library/react';

export function getDayButton(day: Date) {
  return screen.getByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}
export function getWeekButton(week: number) {
  return screen.getByRole('button', {
    name: `Week n. ${week}`
  });
}

export function getTableFooter() {
  return screen.getByRole('table').querySelector('tfoot');
}

export function getGoToPreviousButton() {
  return screen.getByRole('button', { name: 'Go to previous month' });
}

export function getGoToNextButton() {
  return screen.getByRole('button', { name: 'Go to next month' });
}
