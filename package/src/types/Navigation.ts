import { DayPickerProps } from "./DayPicker";

/**
 * @category Components
 */
export interface NavigationProps {
  dayPickerProps: DayPickerProps;
}

/**
 * @category Components
 */
export interface NavigationHtmlProps {
  containerProps: {
    className?: string;
    style?: React.CSSProperties;
  };
  nextProps: {
    className?: string;
    style?: React.CSSProperties;
  };
  prevProps: {
    className?: string;
    style?: React.CSSProperties;
  };
}

/**
 * @category Components
 */
export type NavigationMonths = { nextMonth?: Date; prevMonth?: Date };
