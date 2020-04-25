import * as DateFns from 'date-fns';
import { DayPickerProps, MatchingModifiers } from '../DayPicker';

/**
 * The props used by the [[Day]] component.
 */
export interface DayProps {
  /**
   * The day to display in the calendar.
   */
  day: Date;
  /**
   * The month the calendar belongs to. Used to calulate outside days.
   */
  currentMonth: Date;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
}

/**
 * A function that format the day for the [[Day]] component.
 */
export type DayFormatter = (
  day: Date,
  options?: { locale?: DateFns.Locale }
) => string;

export type DayContainerHtmlProps = {
  'aria-disabled'?: boolean;
  'aria-hidden'?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

export type DayWrapperHtmlProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DayHtmlProps = {
  containerProps: DayContainerHtmlProps;
  wrapperProps: DayWrapperHtmlProps;
  modifiers: MatchingModifiers;
};
