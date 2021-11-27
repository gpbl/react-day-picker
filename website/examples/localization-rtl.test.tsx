import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './localization-rtl';
import { getMonthCaption, getPrevButton, getDayCell } from '@site/src/test';
import { addDays } from 'date-fns';

let container: HTMLElement;

beforeEach(() => {
  const renderResult = render(<Example />);
  container = renderResult.container;
});

test.todo('should set the "dir" attribute');

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());

  describe('when clicking the previous month button', () => {
    beforeEach(() => {
      fireEvent.click(getPrevButton());
    });
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
