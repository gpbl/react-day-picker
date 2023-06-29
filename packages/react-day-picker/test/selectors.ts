import { screen } from '@testing-library/react';
import { format } from 'date-fns';

export function getDayButton(day: Date, index = 0) {
  return screen.getAllByRole('button', {
    name: day.getDate().toString()
  })[index];
}

export function getAllSelectedDays() {
  const buttons = screen
    .getByRole('grid')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('button');

  return Array.from(buttons).filter(
    (button) => button.getAttribute('aria-selected') === 'true'
  );
}

export function getAllEnabledDays() {
  const buttons = screen
    .getByRole('grid')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('button');

  return Array.from(buttons).filter((button) => !button.disabled);
}

export function getDayButtons(day: Date) {
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
  return getDayButton(day);
}
export function getWeekButton(week: number) {
  return screen.getByRole('button', {
    name: `Week n. ${week}`
  });
}

export function getTableFooter() {
  return screen.getByRole('grid').querySelector('tfoot');
}

export function queryTableFooter() {
  return screen.queryByRole('grid')?.querySelector('tfoot');
}

export function getPrevButton() {
  return screen.getByRole('button', { name: 'Go to previous month' });
}

export function queryPrevButton() {
  return screen.queryByRole('button', { name: 'Go to previous month' });
}

export function getNextButton() {
  return screen.getByRole('button', { name: 'Go to next month' });
}

export function queryNextButton() {
  return screen.queryByRole('button', { name: 'Go to next month' });
}

export function getMonthCaption(displayIndex = 0) {
  return screen.getAllByRole('presentation')[displayIndex];
}

export function getMonthGrid(index = 0) {
  return screen.getAllByRole('grid')[index];
}

export function queryMonthGrids() {
  return screen.queryAllByRole('grid', { hidden: true });
}

export function getYearDropdown() {
  return screen.getByRole('combobox', { name: 'Year:' });
}

export function queryYearDropdown() {
  return screen.queryByRole('combobox', { name: 'Year:' });
}

export function getMonthDropdown() {
  return screen.getByRole('combobox', { name: 'Month:' });
}

export function queryMonthDropdown() {
  return screen.queryByRole('combobox', { name: 'Month:' });
}

export function getFocusedElement() {
  if (!document.activeElement) {
    throw new Error('Could not find any focused element');
  }
  return document.activeElement;
}
