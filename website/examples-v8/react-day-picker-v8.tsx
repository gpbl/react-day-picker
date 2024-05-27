/* eslint-disable import/export */
import {
  DayPicker as DayPickerV8,
  type DayPickerProps
} from "react-day-picker-v8";
import styles from "react-day-picker-v8/dist/style.module.css";

export {
  Button,
  type DayPickerSingleProps,
  type DayContentProps,
  type DayMouseEventHandler,
  type DayPickerProps,
  type DateFormatter,
  type WeekNumberFormatter,
  type DateRange,
  type DayProps,
  useDayRender,
  useNavigation,
  useSelectRange,
  useSelectSingle,
  useSelectMultiple,
  type SelectRangeEventHandler
} from "react-day-picker-v8";

export function DayPicker(props: DayPickerProps) {
  return <DayPickerV8 {...props} classNames={styles} />;
}
