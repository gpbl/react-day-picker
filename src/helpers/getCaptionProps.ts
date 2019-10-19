import { CaptionHtmlProps } from '../../typings/react-day-picker';

/**
 * Return props for the Caption component.
 */
export function getCaptionProps(
  props: ReactDayPicker.DayPickerProps
): CaptionHtmlProps {
  const { styles, classNames } = props;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
