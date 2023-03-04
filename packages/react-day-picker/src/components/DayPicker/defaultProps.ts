import { DayPickerProps } from 'components/DayPicker/DayPicker';

export type DefaultProps = Required<Pick<DayPickerProps, 'numberOfMonths'>>;

/** The default props for the DayPicker component. */
export const defaultProps: DefaultProps = {
  numberOfMonths: 1
};
