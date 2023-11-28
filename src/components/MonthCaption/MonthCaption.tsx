import { DayPickerMonth } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { DropdownNav } from '../DropdownNav';

export interface MonthCaptionProps {
  id: string;
  month: DayPickerMonth;
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
        <DropdownNav month={props.month} showMonths showYears />
      ) : dropdownNavigation ? (
        <DropdownNav
          month={props.month}
          showMonths={
            dropdownNavigation === true || dropdownNavigation === 'month'
          }
          showYears={
            dropdownNavigation === true || dropdownNavigation === 'year'
          }
        />
      ) : (
        formatCaption(props.month.date, { locale })
      )}
    </div>
  );
}
