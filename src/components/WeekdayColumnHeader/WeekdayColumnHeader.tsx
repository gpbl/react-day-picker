import { useDayPicker } from '../../contexts/DayPickerContext';

export interface WeekdayColumnHeaderProps
  extends Pick<React.AriaAttributes, 'aria-colindex' | 'aria-label'> {
  weekday?: Date;
}
/** Render the column header with the weekday name (e.g. "Mo", "Tu", etc.) */
export function WeekdayColumnHeader(props: WeekdayColumnHeaderProps) {
  const {
    classNames,
    formatters: { formatWeekdayName },
    labels: { labelWeekday, labelWeekNumberHeader },
    locale,
    hideWeekdayRow,
    styles
  } = useDayPicker();
  return (
    <span
      role="columnheader"
      aria-colindex={props['aria-colindex']}
      aria-label={
        props.weekday
          ? labelWeekday(props.weekday, { locale })
          : labelWeekNumberHeader({ locale })
      }
      className={classNames.weekday_columnheader}
      style={styles?.weekday_columnheader}
    >
      {!hideWeekdayRow &&
        (props.weekday ? formatWeekdayName(props.weekday, { locale }) : '#')}
    </span>
  );
}
