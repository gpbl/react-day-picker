import { DayPickerProps } from "../DayPicker";
import { CaptionHtmlProps } from "../../types";

/**
 * Return props for creating a {@link Caption} component.
 *
 * #### Usage
 *
 * Use this helper when swizzling the {@link Caption} via the
 * {@link DayPickerProps.components} prop. It will make sure it plays nicely
 * inside DayPicker.
 *
 * ```tsx
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
 * @category Swizzle Helpers
 */
export function getCaptionProps(
  dayPickerProps: DayPickerProps
): CaptionHtmlProps {
  const { styles, classNames } = dayPickerProps;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption
    }
  };
}
