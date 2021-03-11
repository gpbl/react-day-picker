import { UseInputDayPickerProps, UseInputFieldProps } from './';

/** Represent the value returned by [[useInput]]. */

export interface UseInput {
  /** The props to pass to a DayPicker component: `<DayPicker {...dayPickerProps} />` */
  dayPickerProps: UseInputDayPickerProps;
  /** The props to pass to an input field: `<input {...fieldProps} />` */
  fieldProps: UseInputFieldProps;
  /** A function to reset to the initial state. */
  reset: () => void;
  /** A function to set the selected day. */
  setSelected: (day: Date) => void;
}
