import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';

export type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';

export function Nav() {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious },
    locale
  } = useDayPicker();

  const calendar = useCalendar();

  return (
    <nav className={classNames.nav} style={styles?.nav}>
      <button
        name="previous-month"
        disabled={!calendar.previousMonth}
        aria-label={labelPrevious(calendar.previousMonth, { locale })}
        className={classNames.button_previous}
        onClick={calendar.goToPreviousMonth}
      >
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <polygon points="15 17.23 9.43 11.5 15 5.76 13.28 4 6 11.5 13.28 19" />
        </svg>
      </button>
      <button
        name="next-month"
        aria-label={labelNext(calendar.nextMonth, { locale })}
        disabled={!calendar.nextMonth}
        className={classNames.button_next}
        onClick={calendar.goToNextMonth}
      >
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <polygon points="9 17.23 14.56 11.5 9 5.76 10.71 4 18 11.5 10.71 19" />
        </svg>
      </button>
    </nav>
  );
}
