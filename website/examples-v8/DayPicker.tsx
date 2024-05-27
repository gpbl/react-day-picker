/* eslint-disable import/export */
import {
  DayPicker as DayPickerV8,
  type DayPickerProps
} from "react-day-picker-v8";
import styles from "react-day-picker-v8/dist/style.module.css";

export { DateRange, type DayPickerSingleProps } from "react-day-picker-v8";

export function DayPicker(props: DayPickerProps) {
  return <DayPickerV8 {...props} classNames={styles} />;
}
