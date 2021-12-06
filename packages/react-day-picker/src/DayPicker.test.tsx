import React from 'react';
import { render } from '@testing-library/react';
import { freezeBeforeAll } from '@test/utils';
import { getDayButton } from '@test/po';
import { DayPicker } from './DayPicker';

const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

describe('when rendering a month that contains today', () => {
  beforeEach(() => render(<DayPicker month={today} mode="single" />));
  test('it should add the default class name for today', () => {
    expect(getDayButton(today)).toHaveClass('rdp-day_today');
  });
  test('it should not add the default class name for tomorrow', () => {
    expect(getDayButton(tomorrow)).not.toHaveClass('rdp-day_today');
  });
});

describe('when the first day of the month is focused', () => {
  describe('when the arrow up key is pressed', () => {
    test.todo('should focus a day in the previous month');
    describe('if the previous month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the previous day is disabled', () => {
      test.todo('should focus the day before');
    });
  });
  describe('when the arrow down key is pressed', () => {
    test.todo('should focus the day in the next week');
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
  describe('when the arrow left key is pressed', () => {
    test.todo('should focus a day in the previous month');
    describe('if the day in the previous week is disabled', () => {
      test.todo('should focus the day before');
    });
  });
  describe('when the arrow right key is pressed', () => {
    test.todo('should focus the next day');
    describe('if the day in the next day is disabled', () => {
      test.todo('should focus the day after');
    });
  });
});

describe('when the last day of the month is focused', () => {
  describe('when the arrow down key is pressed', () => {
    test.todo('should focus the day in the next month');
    describe('if the next month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
  describe('when the arrow right key is pressed', () => {
    test.todo('should focus a day in the next month');
    describe('if the next month is not displayed', () => {
      test.todo('should stay in the same month');
    });
    describe('if the day in the next week is disabled', () => {
      test.todo('should focus the day after');
    });
  });
});
