/**
 * Map of functions to translate ARIA labels for the relative elements.
 */
export type Labels = {
  labelMonthDropdown: () => string;
  labelYearDropdown: () => string;
  labelNext: NavButtonLabelFormatter;
  labelPrevious: NavButtonLabelFormatter;
  labelDay: DayLabelFormatter;
  labelWeekday: WeekdayLabelFormatter;
  labelWeekNumber: WeekNumberLabelFormatter;
};

import { Locale } from 'date-fns';

import { ModifierStatus } from '../types';

/**
 * Represent a function to format the ARIA label for the [[Day]] component.
 */
export type DayLabelFormatter = (
  day: Date,
  modifiers: ModifierStatus,
  options?: { locale?: Locale }
) => string;

/**
 * Represent a function to format the ARIA label for the "next month" / "prev
 * month" buttons in the navigation.
 */
export type NavButtonLabelFormatter = (
  month?: Date,
  options?: { locale?: Locale }
) => string;

/** Represent a function to format the ARIA label for the Head component.*/
export type WeekdayLabelFormatter = (
  day: Date,
  options?: { locale?: Locale }
) => string;

/** Represent a function to format the ARIA label of the week number.*/
export type WeekNumberLabelFormatter = (
  n: number,
  options?: { locale?: Locale }
) => string;
