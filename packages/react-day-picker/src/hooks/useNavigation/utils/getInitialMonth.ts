import { addMonths, differenceInCalendarMonths, startOfMonth } from 'date-fns';

export function getInitialMonth(context: {
  numberOfMonths?: number;
  month?: Date;
  defaultMonth?: Date;
  today?: Date;
  toDate?: Date;
  fromDate?: Date;
}): Date {
  const { month, defaultMonth, today = new Date() } = context;
  let initialMonth = month || defaultMonth || today;

  const { toDate, fromDate, numberOfMonths = 1 } = context;

  // Fix the initialMonth if is after the to-date
  if (toDate && differenceInCalendarMonths(toDate, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return startOfMonth(initialMonth);
}
