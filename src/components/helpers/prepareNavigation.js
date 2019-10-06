import { startOfMonth, addMonths } from 'date-fns';

import { DateWithModifiers } from '../../classes';

/**
 * Return the props for the Navigation component.
 *
 * TODO: document returned props.
 *
 * @param {Object} props
 *
 * @return {Object}
 */
export default function prepareNavigation(props) {
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

  let prevMonth;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  const handlePrevClick = e => {
    onMonthChange && onMonthChange(prevMonth, e);
    onPrevClick && onPrevClick(prevMonth, e);
  };
  const handleNextClick = e => {
    onMonthChange && onMonthChange(nextMonth, e);
    onNextClick && onNextClick(nextMonth, e);
  };
  const handleStartClick = e => {
    const day = new DateWithModifiers(startDay, {}, props);
    onMonthChange && onMonthChange(day, e);
    onStartClick && onStartClick(day, e);
  };

  return {
    prevMonth,
    nextMonth,
    currentMonth,
    handlePrevClick,
    handleNextClick,
    handleStartClick,
  };
}
