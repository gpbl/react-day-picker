import { DayPickerMonth } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';

export interface MonthCaptionProps {
  id: string;
  month: DayPickerMonth;
}
export function MonthCaption(props: MonthCaptionProps) {
  const {
    classNames,
    formatters: { formatMonthCaption },
    locale,
    styles
  } = useDayPicker();
  return (
    <div
      id={props.id}
      className={classNames.month_caption}
      style={styles?.month_caption}
    >
      {formatMonthCaption(props.month.date, { locale })}{' '}
    </div>
  );
}
