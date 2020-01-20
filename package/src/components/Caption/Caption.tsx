import * as React from "react";
import { getCaptionProps } from "./getCaptionProps";
import { CaptionProps } from "../../types/Caption";

/**
 * The `Caption` component renders the caption of the month. As default, it
 * displays the month’s name and its year.
 *
 * #### Use with DayPicker
 *
 * - To change how the caption is formatted, use the {@link formatCaption} prop.
 * - Swizzle this component using the {@link components} prop and the
 *   {@link getCaptionProps} helper.
 *
 * @private
 * @category Components
 */
export function Caption(props: CaptionProps): JSX.Element {
  const { containerProps } = getCaptionProps(props.dayPickerProps);
  const { locale } = props.dayPickerProps;
  return (
    <caption {...containerProps}>
      {props.dayPickerProps.formatCaption(props.month, { locale })}
    </caption>
  );
}
