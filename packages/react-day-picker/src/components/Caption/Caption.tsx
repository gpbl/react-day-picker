import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from 'components';
import { useDayPicker, useNavigation } from 'contexts';
import { MonthChangeEventHandler } from 'types';
import { CaptionProps } from './CaptionProps';

/**
 * Render the caption of a month, which includes title and navigation buttons.
 * The caption has a different layout when setting the `numberOfMonths` prop.
 */
export function Caption(props: CaptionProps): JSX.Element {
  const { displayMonth, isFirst = false, isLast = false } = props;

  const {
    classNames,
    numberOfMonths,
    disableNavigation,
    styles,
    captionLayout,
    onMonthChange,
    components: { CaptionLabel }
  } = useDayPicker();

  const { previousMonth, nextMonth, goToMonth } = useNavigation();

  const handlePreviousClick: React.MouseEventHandler = (e) => {
    if (!previousMonth) return;
    goToMonth(previousMonth);
    onMonthChange?.(previousMonth);
  };

  const handleNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    goToMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };

  const handleMonthChange: MonthChangeEventHandler = (newMonth) => {
    goToMonth(newMonth);
    onMonthChange?.(newMonth);
  };

  const captionLabel = <CaptionLabel displayMonth={displayMonth} />;

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
                hideNext={numberOfMonths > 1 && !isLast}
                hidePrevious={numberOfMonths > 1 && !isFirst}
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
