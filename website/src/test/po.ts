/** Page Objects */

import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';

export function getDayButton(day: Date) {
  return screen.getByRole('button', {
    name: format(day, 'do MMMM (EEEE)')
  });
}

export function getAllSelectedDays() {
  const buttons = screen
    .getByRole('table')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('button');

  return Array.from(buttons).filter(
    (button) => button.getAttribute('aria-pressed') === 'true'
  );
}

export function getAllEnabledDays() {
  const buttons = screen
    .getByRole('table')
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

export function queryPrevButton() {
  return screen.queryByRole('button', { name: 'Go to previous month' });
}

export function getNextButton() {
  return screen.getByRole('button', { name: 'Go to next month' });
}

export function queryNextButton() {
  return screen.queryByRole('button', { name: 'Go to next month' });
}

export function getMonthCaption(container: HTMLElement, index = 0) {
  return container.getElementsByClassName('rdp-caption_label')[index];
}

export function getMonthTable(index = 0) {
  return screen.getAllByRole('table')[index];
}

export function getYearDropdown() {
  return screen.getByRole('combobox', { name: 'Year:' });
}

export function getMonthDropdown() {
  return screen.getByRole('combobox', { name: 'Month:' });
}

export function clickDay(date: Date, options = {}) {
  fireEvent.click(getDayButton(date), options);
}

export function clickPrevMonth(options = {}) {
  fireEvent.click(getPrevButton(), options);
}

export function clickNextMonth(options = {}) {
  fireEvent.click(getNextButton(), options);
}

export function clickWeek(weekNumber: number) {
  fireEvent.click(getWeekButton(weekNumber));
}

export function pressArrowLeft() {
  userEvent.type(getFocusedElement(), '{arrowleft}');
}

export function pressArrowRight() {
  userEvent.type(getFocusedElement(), '{arrowright}');
}

export function pressArrowUp() {
  userEvent.type(getFocusedElement(), '{arrowup}');
}

export function pressArrowDown() {
  userEvent.type(getFocusedElement(), '{arrowdown}');
}

export function focusDay(day: Date) {
  getDayButton(day).focus();
}

export function getFocusedElement() {
  return document.activeElement;
}

export function selectMonth(monthName: string) {
  userEvent.selectOptions(getMonthDropdown(), monthName);
}

export function selectYear(year: string | number) {
  userEvent.selectOptions(getYearDropdown(), String(year));
}
