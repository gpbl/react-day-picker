import * as dateFns from 'date-fns';
import { DayPickerProps } from '../DayPicker';

/**
 * Props for the #{}
 */
export type CaptionHtmlProps = {
  containerProps: {
    className?: string;
    style?: React.CSSProperties;
  };
};
/**
 * The props used by the [[MonthCaption]] component.
 */
export interface MonthCaptionProps {
  /**
   * The month the caption is referring to.
   */
  month: Date;
  /**
   * Reference to the props used by the DayPicker component.
   */
  dayPickerProps: DayPickerProps;
}
/**
 * A function that format a month for the [[MonthCaption]] component.
 */
export type MonthCaptionFormatter = (
  month: Date,
  options?: { locale?: dateFns.Locale }
) => string;
