import { DayPickerProps } from '../DayPicker';
import { CaptionHtmlProps } from './types';

/**
 * Return props for creating a [[MonthCaption]] component.
 *
 * #### Usage
 *
 * Use this helper when swizzling the caption using the
 * [[DayPickerProps.components]] prop.
 *
 * ```jsx
 * function MonthCaption({ dayPickerProps }): JSX.Element {
 *   const { containerProps } = getCaptionProps(dayPickerProps);
 *   return (
 *     <caption {...containerProps}>
 *       Something inside the caption
 *     </caption>;
 *   )
 * }
 * <DayPicker components={{ MonthCaption }} />
 * ```
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
