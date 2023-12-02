import { DayPickerMonth } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { DropdownNav } from '../DropdownNav';

export interface MonthCaptionProps {
  /** The month where the grid is displayed. */
  month: DayPickerMonth;
  /** Used for the aria-label. */
  id: string;
  /** The index where this month is displayed. */
  index: number;
}
export function MonthCaption(props: MonthCaptionProps) {
  const {
    classNames,
    captionLayout,
    dropdownNavigation,
    formatters: { formatCaption },
    locale,
    styles
  } = useDayPicker();

  return (
    <div
      id={props.id}
      className={classNames.month_caption}
      style={styles?.month_caption}
    >
      {captionLayout === 'dropdown' || captionLayout === 'dropdown-buttons' ? (
        <DropdownNav
          month={props.month}
          index={props.index}
          showMonths
          showYears
        />
      ) : dropdownNavigation ? (
        <DropdownNav
          month={props.month}
          index={props.index}
          showMonths={
            dropdownNavigation === true || dropdownNavigation === 'month'
          }
          showYears={
            dropdownNavigation === true || dropdownNavigation === 'year'
          }
        />
      ) : (
        <span className={classNames.caption_label}>
          {formatCaption(props.month.date, { locale })}
        </span>
      )}
    </div>
  );
}
