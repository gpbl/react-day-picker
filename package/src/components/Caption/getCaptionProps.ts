import { DayPickerProps } from "../DayPicker";
import { CaptionHtmlProps } from "./Caption";

/**
 * Return props for the Caption component.
 */
export function getCaptionProps(props: DayPickerProps): CaptionHtmlProps {
  const { styles, classNames } = props;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption
    }
  };
}
