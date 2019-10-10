import { startOfMonth, addMonths } from 'date-fns';

import { DayPickerProps } from 'types/props';

interface PrepareNavigation {
  prevMonth?: Date;
  nextMonth?: Date;
  currentMonth: Date;
  handlePrevClick: Function;
  handleNextClick: Function;
  handleStartClick: Function;
}
/**
 * Return the props for the Navigation component.
 */
export function prepareNavigation(props: DayPickerProps): PrepareNavigation {
  const {
    fromMonth,
    toMonth,
    month,
    numberOfMonths,
    pagedNavigation,
    onMonthChange,
    onNextClick,
    onStartClick,
    onPrevClick,
    startDay,
  } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  let currentMonth = startOfMonth(month);

  let prevMonth: any = null;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: any;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  const handlePrevClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onMonthChange && onMonthChange(prevMonth, e);
    onPrevClick && onPrevClick(prevMonth, e);
  };
  const handleNextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onMonthChange && onMonthChange(nextMonth, e);
    onNextClick && onNextClick(nextMonth, e);
  };
  const handleStartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onMonthChange && onMonthChange(startDay, e);
    onStartClick && onStartClick(startDay, e);
  };

  const preparedNavigation: PrepareNavigation = {
    prevMonth,
    nextMonth,
    currentMonth,
    handlePrevClick,
    handleNextClick,
    handleStartClick,
  };

  return preparedNavigation;
}
