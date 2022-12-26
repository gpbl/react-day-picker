// import userEvent from '@testing-library/user-event';

import { fireEvent } from '@testing-library/dom';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { getFocusedElement } from './po';

// const user = userEvent.setup();

// import {
//   getDayButton,
//   getFocusedElement,
//   getMonthDropdown,
//   getNextButton,
//   getPrevButton,
//   getWeekButton,
//   getYearDropdown
// } from './po';

// export async function clickPrevMonth(options = {}) {
//   await user.click(getPrevButton(), options);
// }

// export async function clickNextMonth(options = {}) {
//   await user.click(getNextButton(), options);
// }

// export async function clickWeek(weekNumber: number) {
//   await user.click(getWeekButton(weekNumber));
// }

// export async function pressShiftTab() {
//   userEvent.tab({ shift: true });
// }

// export async function pressEnter() {
//   userEvent.keyboard('{enter}');
// }

// export async function pressArrowLeft() {
//   userEvent.type(getFocusedElement(), '{arrowleft}');
// }

// export async function pressArrowRight() {
//   userEvent.type(getFocusedElement(), '{arrowright}');
// }

// export async function pressArrowUp() {
//   userEvent.type(getFocusedElement(), '{arrowup}');
// }

// export async function pressArrowDown() {
//   userEvent.type(getFocusedElement(), '{arrowdown}');
// }

// export async function pressPageUp() {
//   await user.keyDown(getFocusedElement(), { key: 'PageUp', charCode: 33 });
// }

// export async function pressPageDown() {
//   await user.keyDown(getFocusedElement(), { key: 'PageDown', charCode: 34 });
// }

// export async function pressShiftPageUp() {
//   await user.keyDown(getFocusedElement(), {
//     key: 'PageUp',
//     charCode: 33,
//     shiftKey: true
//   });
// }

// export async function pressShiftPageDown() {
//   await user.keyDown(getFocusedElement(), {
//     key: 'PageDown',
//     charCode: 34,
//     shiftKey: true
//   });
// }

// export async function pressHome() {
//   userEvent.type(getFocusedElement(), '{home}');
// }

export async function focusDaysGrid(user: UserEvent) {
  // Make sure nothing is focused
  await fireEvent.blur(getFocusedElement());
  // By pressing tab 3 times
  await user.tab();
  await user.tab();
  await user.tab();
}
