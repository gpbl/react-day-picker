/**
 * Return props for the Caption component.
 */
export function getCaptionProps(
  props: ReactDayPicker.DayPickerProps
): ReactDayPicker.CaptionHtmlProps {
  const { styles, classNames } = props;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
