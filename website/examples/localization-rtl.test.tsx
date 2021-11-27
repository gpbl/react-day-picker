import React from 'react';

import { clickPrevMonth, getDayCell, getMonthCaption } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { act, fireEvent, render } from '@testing-library/react';
import { addDays } from 'date-fns';

import Example from './localization-rtl';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
  describe('when clicking the previous month button', () => {
    beforeEach(() => clickPrevMonth());
    test('should display October 2021', () => {
      expect(getMonthCaption(container)).toHaveTextContent('ديسمبر 2021');
    });
  });
  describe('when clicking the next month button', () => {
    test('should display November 2021', () => {
      expect(getMonthCaption(container)).toHaveTextContent('نوفمبر 2021');
    });
  });
  describe('when focusing the 13th day', () => {
    const day = new Date(2021, 10, 13);
    const previousDay = addDays(day, -1);
    const nextDay = addDays(day, 1);
    beforeEach(() => {
      fireEvent.focus(getDayCell(day));
    });
    describe('when pressing left key on the 13th day', () => {
      beforeEach(() => {
        act(() => {
          fireEvent.keyDown(getDayCell(day), {
            e: { key: 'ArrowRight' }
          });
        });
      });
      // TODO: unskip. See #1289.
      test.skip('should focus the previous day', () => {
        expect(document.activeElement).toBe(getDayCell(previousDay));
      });
    });
    describe('when pressing right key on the 13th day', () => {
      beforeEach(() => {
        fireEvent.keyDown(getDayCell(day), {
          e: { key: 'ArrowRight' }
        });
      });
      // TODO: unskip. See #1289.
      test.skip('should focus the next day', () => {
        expect(document.activeElement).toBe(getDayCell(nextDay));
      });
    });
  });
});
