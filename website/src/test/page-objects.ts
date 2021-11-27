import { format } from 'date-fns';
import { screen } from '@testing-library/react';

export function getDayButton(day: Date) {
  return screen.getByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

export function queryDayButton(day: Date) {
  return screen.queryByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

export function getDayCell(day: Date) {
  return screen.getByRole('cell', {
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

export function getPrevButton() {
  return screen.getByRole('button', { name: 'Go to previous month' });
}

export function getNextButton() {
  return screen.getByRole('button', { name: 'Go to next month' });
}

export function getMonthCaption(container: HTMLElement, index = 0) {
  return container.getElementsByClassName('rdp-caption_label')[index];
}

export function getMonthTable(index = 0) {
  return screen.getAllByRole('table')[index];
}
