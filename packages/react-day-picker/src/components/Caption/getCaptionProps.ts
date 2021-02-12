import { DayPickerProps } from '../DayPicker';
import { CaptionHtmlProps } from './types';

/**
 * Return props for creating a [[Caption]] component.
 */
export function getCaptionProps(
  dayPickerProps: DayPickerProps
): CaptionHtmlProps {
  const { styles, classNames } = dayPickerProps;
  return {
    containerProps: {
      className: classNames?.caption,
      style: styles?.caption
    }
  };
}
