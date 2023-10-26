import { screen } from '@testing-library/react';
import { format } from 'date-fns';
import { grid } from './po';

/** @deprecated */
export function getDayButton(day: Date, index = 0) {
  return screen.getAllByRole('gridcell', {
    name: day.getDate().toString()
  })[index];
}

/** @deprecated */
export function getAllSelectedDays() {
  const buttons = screen
    .getByRole('grid')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('button');

  return Array.from(buttons).filter(
    (button) => button.getAttribute('aria-selected') === 'true'
  );
}

/** @deprecated */
export function getAllEnabledDays() {
  const buttons = screen
    .getByRole('grid')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('button');

  return Array.from(buttons).filter((button) => !button.disabled);
}

/** @deprecated */
export function getDayButtons(day: Date) {
  return screen.getByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

/** @deprecated */
export function queryDayButton(day: Date) {
  return screen.queryByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

/** @deprecated */
export function getDayCell(day: Date) {
  return getDayButton(day);
}
/** @deprecated */
export function getWeekButton(week: number) {
  return screen.getByRole('button', {
    name: `Week n. ${week}`
  });
}

/** @deprecated */
export function getTableFooter() {
  return grid().querySelector('tfoot');
}

/** @deprecated */
export function queryTableFooter() {
  return screen.queryByRole('grid')?.querySelector('tfoot');
}

/** @deprecated */
export function queryPrevButton() {
  return screen.queryByRole('button', { name: 'Go to previous month' });
}

/** @deprecated */
export function queryNextButton() {
  return screen.queryByRole('button', { name: 'Go to next month' });
}

/** @deprecated */
export function getMonthCaption(displayIndex = 0) {
  return screen.getAllByRole('presentation')[displayIndex];
}

/** @deprecated */
export function getMonthGrid(index = 0) {
  return screen.getAllByRole('grid')[index];
}

/** @deprecated */
export function queryMonthGrids() {
  return screen.queryAllByRole('grid');
}

/** @deprecated */
export function queryYearDropdown() {
  return screen.queryByRole('combobox', { name: 'Year:' });
}

/** @deprecated */
export function queryMonthDropdown() {
  return screen.queryByRole('combobox', { name: 'Month:' });
}

/** @deprecated */
export function getFocusedElement() {
  if (!document.activeElement) {
    throw new Error('Could not find any focused element');
  }
  return document.activeElement;
}
