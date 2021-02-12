import { DayPickerProps } from '../DayPicker';
import { CaptionHtmlProps } from './types';

/**
 * Return props for creating a [[Caption]] component.
 */
export function getCaptionProps(
  dayPickerProps: Pick<DayPickerProps, 'classNames' | 'styles'>
): CaptionHtmlProps {
  const { styles, classNames } = dayPickerProps;
  return {
    containerProps: {
      className: classNames?.caption,
      style: styles?.caption
    }
  };
}
