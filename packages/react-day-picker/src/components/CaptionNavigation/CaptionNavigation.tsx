import React from 'react';

import isSameMonth from 'date-fns/isSameMonth';

import { CaptionProps } from 'components/Caption/Caption';
import { CaptionLabel } from 'components/CaptionLabel';
import { Navigation } from 'components/Navigation';
import { useDayPicker } from 'contexts/DayPicker';
import { useNavigation } from 'contexts/Navigation';

/**
 * Render a caption with a button-based navigation.
 */
export function CaptionNavigation(props: CaptionProps): JSX.Element {
  const { numberOfMonths, onMonthChange, dir, components } = useDayPicker();
  const { previousMonth, nextMonth, goToMonth, displayMonths } =
    useNavigation();

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

  const CaptionLabelComponent = components?.CaptionLabel ?? CaptionLabel;
  const captionLabel = (
    <CaptionLabelComponent id={props.id} displayMonth={props.displayMonth} />
  );

  return (
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
