import React from 'react';

import { isSameMonth } from 'date-fns';

import { CaptionLabel } from 'components/CaptionLabel';
import { MonthsDropdown } from 'components/MonthsDropdown';
import { Navigation } from 'components/Navigation';
import { YearsDropdown } from 'components/YearsDropdown';
import { useDayPicker } from 'contexts/DayPicker';
import { useNavigation } from 'contexts/Navigation';
import { MonthChangeEventHandler } from 'types/EventHandlers';

/** Represent the props of the [[Caption]] component. */
export interface CaptionProps {
  /** The ID for the heading element. Must be the same as the labelled-by in Table. */
  id?: string;
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

/**
 * The layout of the caption:
 *
 * - `dropdown`: display dropdowns for choosing the month and the year.
 * - `buttons`: display previous month / next month buttons.
 */
export type CaptionLayout = 'dropdown' | 'buttons';

/**
 * Render the caption of a month, which includes title and navigation buttons.
 * The caption has a different layout when setting the [[DayPickerProps.captionLayout]] prop.
 */
export function Caption(props: CaptionProps): JSX.Element {
  const {
    classNames,
    numberOfMonths,
    disableNavigation,
    styles,
    captionLayout,
    onMonthChange,
    dir,
    components
  } = useDayPicker();

  const { previousMonth, nextMonth, goToMonth, displayMonths } =
    useNavigation();

  const handlePreviousClick: React.MouseEventHandler = () => {
    if (!previousMonth) return;
    goToMonth(previousMonth);
    onMonthChange?.(previousMonth);
  };

  const handleNextClick: React.MouseEventHandler = () => {
    if (!nextMonth) return;
    goToMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };

  const handleMonthChange: MonthChangeEventHandler = (newMonth) => {
    goToMonth(newMonth);
    onMonthChange?.(newMonth);
  };

  const displayIndex = displayMonths.findIndex((month) =>
    isSameMonth(props.displayMonth, month)
  );
  let isFirst = displayIndex === 0;
  let isLast = displayIndex === displayMonths.length - 1;
  if (dir === 'rtl') {
    [isLast, isFirst] = [isFirst, isLast];
  }

  const hideNext = numberOfMonths > 1 && (isFirst || !isLast);
  const hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);

  const CaptionLabelComponent = components?.CaptionLabel ?? CaptionLabel;
  const captionLabel = (
    <CaptionLabelComponent id={props.id} displayMonth={props.displayMonth} />
  );

  let captionContent;
  if (disableNavigation) {
    captionContent = captionLabel;
  } else if (captionLayout === 'dropdown') {
    captionContent = (
      <div
        className={classNames.caption_dropdowns}
        style={styles.caption_dropdowns}
      >
        {/* Caption label is visually hidden but for a11y. */}
        <div className={classNames.vhidden}>{captionLabel}</div>
        <MonthsDropdown
          onChange={handleMonthChange}
          displayMonth={props.displayMonth}
        />
        <YearsDropdown
          onChange={handleMonthChange}
          displayMonth={props.displayMonth}
        />
      </div>
    );
  } else {
    captionContent = (
      <>
        {captionLabel}
        <Navigation
          displayMonth={props.displayMonth}
          hideNext={hideNext}
          hidePrevious={hidePrevious}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      </>
    );
  }

  return (
    <div className={classNames.caption} style={styles.caption}>
      {captionContent}
    </div>
  );
}
