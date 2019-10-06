import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';

/**
 * Return the props for the DayPicker component.
 *
 * TODO: document returned props.
 *
 * @param {Object} props
 *
 * @return {Object}
 */
export default function prepareDayPicker({
  month,
  numberOfMonths,
  toMonth,
  fromMonth,
  reverseMonths,
}) {
  const start = startOfMonth(month);
  const end = startOfMonth(addMonths(start, numberOfMonths));
  const monthsDiff = differenceInMonths(end, start);

  let months = [];
  for (let i = 0; i < monthsDiff; i++) {
    const month = addMonths(start, i);
    if (month > startOfMonth(toMonth)) {
      continue;
    }
    if (month < startOfMonth(fromMonth)) {
      continue;
    }
    months.push(month);
  }

  if (reverseMonths) {
    months = months.reverse();
  }
  return { months };
}
