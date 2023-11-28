import { type DayPickerProps } from '../../../DayPicker';
import { defaultClassNames } from '../defaultClassNames';

/**
 * Return the default class names and any custom class names passed in through
 * props.
 */
export function getClassNames(props: DayPickerProps) {
  return {
    ...defaultClassNames,
    ...props.classNames
  };
}
