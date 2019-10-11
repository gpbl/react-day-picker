import { startOfMonth, addMonths } from 'date-fns';

import { DayPickerProps } from '../../types/DayPickerProps';

interface PreparedNavigation {
  prevMonth?: Date;
  nextMonth?: Date;
  containerProps: object;
  nextProps: object;
  prevProps: object;
  startProps: object;
}

export function prepareNavigation(props: DayPickerProps): PreparedNavigation {
  const {
    fromMonth,
    toMonth,
    month,
    numberOfMonths,
    pagedNavigation,
    classNames,
    styles,
  } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month);

  let prevMonth: Date | undefined;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: Date | undefined;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  const containerProps = { className: classNames.nav, style: styles.nav };
  const nextProps = {
    className: classNames.navNext,
    style: styles.navNext,
  };
  const prevProps = {
    className: classNames.navPrev,
    style: styles.navPrev,
  };
  const startProps = {
    className: classNames.navStart,
    style: styles.navStart,
  };
  const preparedNavigation = {
    containerProps,
    nextProps,
    nextMonth,
    prevProps,
    prevMonth,
    startProps,
  };

  return preparedNavigation;
}
