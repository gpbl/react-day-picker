import * as React from 'react';

/** The props for the [[Navigation]] component. */
export interface NavigationProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** The previous month. */
  previousMonth?: Date;
  /** The next month. */
  nextMonth?: Date;
  /** Hide the previous button. */
  hidePrevious: boolean;
  /** Hide the next button. */
  hideNext: boolean;
  /** Event handler when the next button is clicked. */
  onNextClick: React.MouseEventHandler<HTMLButtonElement>;
  /** Event handler when the previous button is clicked. */
  onPreviousClick: React.MouseEventHandler<HTMLButtonElement>;
}
