import { DayPickerProps } from "./DayPicker";
import { FormatOptions } from "./Formatters";

/**
 * @category Components
 */
export interface CaptionHtmlProps {
  containerProps: {
    className?: string;
    style?: React.CSSProperties;
  };
}
/**
 * The props used by the {@link Caption} component.
 *
 * @category Components
 */
export interface CaptionProps {
  /**
   * The month the caption is referring to.
   */
  month: Date;
  /**
   * Reference to the props used by the DayPicker component. Usually you want to
   * use it when using the {@link getCaptionProps} helper.
   */
  dayPickerProps: DayPickerProps;
}

/**
 * Format a month for the {@link Caption} component.
 *
 * @category Formatters
 */
export type CaptionFormatter = (month: Date, options?: FormatOptions) => string;
