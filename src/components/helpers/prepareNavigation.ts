import { startOfMonth, addMonths } from 'date-fns';

import { DayPickerProps } from 'types/props';

interface PrepareNavigation {
  prevMonth?: Date;
  nextMonth?: Date;
  htmlProps: object;
  htmlNextProps: object;
  htmlPrevProps: object;
  htmlStartProps: object;
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
    classNames,
    styles,
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

  const htmlProps = { className: classNames.nav, style: styles.nav };
  const htmlNextProps = {
    className: classNames.navNext,
    style: styles.navNext,
  };
  const htmlPrevProps = {
    className: classNames.navPrev,
    style: styles.navPrev,
  };
  const htmlStartProps = {
    className: classNames.navStart,
    style: styles.navStart,
  };
  const preparedNavigation: PrepareNavigation = {
    htmlProps,
    htmlNextProps,
    nextMonth,
    htmlPrevProps,
    prevMonth,
    htmlStartProps,
  };

  return preparedNavigation;
}
