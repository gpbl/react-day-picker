import { fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import {
  getDayButton,
  getFocusedElement,
  getMonthDropdown,
  getNextButton,
  getPrevButton,
  getWeekButton,
  getYearDropdown
} from './po';

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

export function pressShiftTab() {
  userEvent.tab({ shift: true });
}

export function pressEnter() {
  userEvent.keyboard('{enter}');
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

export function pressPageUp() {
  fireEvent.keyDown(getFocusedElement(), { key: 'PageUp', charCode: 33 });
}

export function pressPageDown() {
  fireEvent.keyDown(getFocusedElement(), { key: 'PageDown', charCode: 34 });
}

export function pressShiftPageUp() {
  fireEvent.keyDown(getFocusedElement(), {
    key: 'PageUp',
    charCode: 33,
    shiftKey: true
  });
}

export function pressShiftPageDown() {
  fireEvent.keyDown(getFocusedElement(), {
    key: 'PageDown',
    charCode: 34,
    shiftKey: true
  });
}

export function pressHome() {
  userEvent.type(getFocusedElement(), '{home}');
}

export function pressEnd() {
  userEvent.type(getFocusedElement(), '{end}');
}

export function focusDay(day: Date) {
  getDayButton(day).focus();
}

export function selectMonth(monthName: string) {
  userEvent.selectOptions(getMonthDropdown(), monthName);
}

export function selectYear(year: string | number) {
  userEvent.selectOptions(getYearDropdown(), String(year));
}

export function pressTab() {
  userEvent.tab();
}

export function focusDaysGrid() {
  // Make sure nothing is focused
  fireEvent.blur(getFocusedElement());
  // By pressing tab 3 times
  pressTab();
  pressTab();
  pressTab();
}
