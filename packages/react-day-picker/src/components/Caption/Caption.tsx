import React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from '@contexts/DayPicker';
import { useNavigation } from '@contexts/Navigation';
import { MonthsDropdown } from '../MonthsDropdown';
import { Navigation } from '../Navigation';
import { YearsDropdown } from '../YearsDropdown';
import { MonthChangeEventHandler } from '../../types/EventHandlers';

/** Represent the props of the [[Caption]] component. */
export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

/**
 * The layout of the caption:
 *
 * - `dropdown` - display a month / year dropdown
 * - `buttons` - display previous / next month button.
 */
export type CaptionLayout = 'dropdown' | 'buttons';

/**
 * Render the caption of a month, which includes title and navigation buttons.
 * The caption has a different layout when setting the `numberOfMonths` prop.
 */
export function Caption(props: CaptionProps): JSX.Element {
  const { displayMonth } = props;
  const context = useDayPicker();
  const {
    classNames,
    numberOfMonths,
    disableNavigation,
    styles,
    captionLayout,
    onMonthChange,
    dir,
    components: { CaptionLabel }
  } = context;

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
    isSameMonth(displayMonth, month)
  );
  let isFirst = displayIndex === 0;
  let isLast = displayIndex === displayMonths.length - 1;
  if (dir === 'rtl') {
    [isLast, isFirst] = [isFirst, isLast];
  }

  const captionLabel = <CaptionLabel displayMonth={displayMonth} />;
  const hideNext = numberOfMonths > 1 && (isFirst || !isLast);
  const hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);

  return (
    <div className={classNames.caption} style={styles.caption}>
      {disableNavigation && captionLabel}
      {!disableNavigation && (
        <>
          {captionLayout === 'dropdown' ? (
            <div
              className={classNames.caption_dropdowns}
              style={styles.caption_dropdowns}
            >
              <MonthsDropdown
                onChange={handleMonthChange}
                displayMonth={displayMonth}
              />
              <YearsDropdown
                onChange={handleMonthChange}
                displayMonth={displayMonth}
              />
            </div>
          ) : (
            <>
              <CaptionLabel displayMonth={displayMonth} />
              <Navigation
                displayMonth={displayMonth}
                hideNext={hideNext}
                hidePrevious={hidePrevious}
                nextMonth={nextMonth}
                previousMonth={previousMonth}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
