import { useProps } from "../contexts/props";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * @group Components
 */
export function WeekdayColumnHeader(props: {
  ["aria-colindex"]?: number | undefined;
  ["aria-label"]?: string | undefined;
  weekday?: Date;
}) {
  const {
    classNames,
    formatters: { formatWeekdayName },
    labels: { labelWeekday, labelWeekNumberHeader },
    locale,
    hideWeekdayRow,
    styles
  } = useProps();
  return (
    <span
      role="columnheader"
      aria-colindex={props["aria-colindex"]}
      aria-label={
        props.weekday
          ? labelWeekday(props.weekday, { locale })
          : labelWeekNumberHeader({ locale })
      }
      className={classNames.weekday_columnheader}
      style={styles?.weekday_columnheader}
    >
      {!hideWeekdayRow &&
        (props.weekday ? formatWeekdayName(props.weekday, { locale }) : "#")}
    </span>
  );
}
