import type { PropsContextValue } from "../contexts/index.js";

/**
 * Return the next previous the user can navigate to, according to the given
 * options.
 *
 * Please note that the previous month is not always the previous calendar
 * month:
 *
 * - If before the `startMonth` date, is `undefined`;
 * - If the navigation is paged, is the number of months displayed before.
 */
export function getPreviousMonth(
  firstDisplayedMonth: Date,
  props: Pick<
    PropsContextValue,
    | "startMonth"
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
  if (!props.startMonth) {
    return addMonths(month, -offset);
  }
  const monthsDiff = differenceInCalendarMonths(month, props.startMonth);

  if (monthsDiff <= 0) {
    return undefined;
  }

  return addMonths(month, -offset);
}
