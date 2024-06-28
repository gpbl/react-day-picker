import { PropsContextValue } from "../contexts/index.js";

/**
 * Return the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - If after the `endMonth` range, is `undefined`;
 * - If the navigation is paged , is the number of months displayed ahead.
 */
export function getNextMonth(
  firstDisplayedMonth: Date,
  props: Pick<
    PropsContextValue,
    | "startMonth"
    | "endMonth"
    | "numberOfMonths"
    | "pagedNavigation"
    | "disableNavigation"
    | "dateLib"
  >
): Date | undefined {
  if (props.disableNavigation) {
    return undefined;
  }
  const { pagedNavigation, numberOfMonths } = props;
  const { startOfMonth, addMonths, differenceInCalendarMonths } = props.dateLib;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth(firstDisplayedMonth);

  if (!props.endMonth) {
    return addMonths(month, offset);
  }

  const monthsDiff = differenceInCalendarMonths(
    props.endMonth,
    firstDisplayedMonth
  );

  if (monthsDiff < numberOfMonths) {
    return undefined;
  }

  // Jump forward as the number of months when paged navigation
  return addMonths(month, offset);
}
