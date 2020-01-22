import { DayPickerProps } from "../DayPicker";

/**
 * Props for the {@link Navigation}.
 */
export type NavigationProps = {
  dayPickerProps: DayPickerProps;
};

/**
 * HTML props for the {@link Navigation}.
 */
export type NavigationHtmlProps = {
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
};

/**
 * The months that is possible to navigate.
 */
export type NavigationMonths = {
  nextMonth?: Date;
  prevMonth?: Date;
};
