import React from 'react';

import { clickDay, getDayButton } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './range-shift-key';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

describe('when displaying November 2021', () => {
  describe('when clicking on the 11th', () => {
    const day1 = new Date(2021, 10, 11);
    beforeEach(() => clickDay(day1));
    test('the 11th day should be selected', () => {
      expect(getDayButton(day1)).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    });
    describe('when clicking on the 13th', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(() => clickDay(day2));

      test('the 11th day should stay selected', () => {
        expect(getDayButton(day1)).toHaveAttribute(
          'aria-pressed',
          'true'
        );
      });
      test('the 13th day not should be selected', () => {
        expect(getDayButton(day2)).not.toHaveAttribute(
          'aria-pressed'
        );
      });
    });
    describe('when pressing the Shift key', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(() => clickDay(day2, { shiftKey: true }));
      test('the 13th day should be selected', () => {
        expect(getDayButton(day2)).toHaveAttribute(
          'aria-pressed',
          'true'
        );
      });
    });
  });
});
