import { DayPickerProps } from '../DayPicker';

/**
 * Props for the [[Navigation]] component.
 */
export interface NavigationProps {
  dayPickerProps: DayPickerProps;
}

/**
 * HTML props for the [[Navigation]].
 */
export type NavigationHtmlProps = {
  /**
   * The props to apply to the container component
   */
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
