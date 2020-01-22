import { DayPickerProps } from "../DayPicker";
import { CaptionHtmlProps } from "./types";

/**
 * Return props for creating a {@link Caption} component.
 *
 * #### Usage
 *
 * Use this helper when swizzling the caption using  the
 * {@link DayPickerProps.components} prop.
 *
 * ```jsx
 * function Caption({ dayPickerProps }): JSX.Element {
 *   const { containerProps } = getCaptionProps(dayPickerProps);
 *   return (
 *     <caption {...containerProps}>
 *       Something inside the caption
 *     </caption>;
 *   )
 * }
 * <DayPicker components={{ Caption }} />
 * ```
 *
 * @category Components
 *
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
