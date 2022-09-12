import { screen } from '@testing-library/react';
import { format } from 'date-fns';

export function getDayButton(day: Date, index = 0): HTMLElement {
  return screen.getAllByRole('gridcell', {
    name: format(day, 'd')
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
  return screen.getByRole('gridcell', {
    name: format(day, 'd')
  });
}

export function queryDayButton(day: Date) {
  return screen.queryByRole('gridcell', {
    name: format(day, 'd')
  });
}

export function getDayCell(day: Date) {
  return getDayButton(day).parentElement;
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
  return screen.getByRole('button', { name: 'Previous month' });
}

export function queryPrevButton() {
  return screen.queryByRole('button', { name: 'Previous month' });
}

export function getNextButton() {
  return screen.getByRole('button', { name: 'Next month' });
}

export function queryNextButton() {
  return screen.queryByRole('button', { name: 'Next month' });
}

export function getMonthCaption(displayIndex = 0) {
  return screen.getAllByRole('heading', { level: 2 })[displayIndex];
}

export function getMonthGrid(index = 0) {
  return screen.getAllByRole('grid')[index];
}

export function queryMonthGrids() {
  return screen.queryAllByRole('grid');
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
