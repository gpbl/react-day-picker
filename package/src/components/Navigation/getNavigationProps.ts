/**
 * Return the props for the Navigation component and its children.
 */
export function getNavigationProps(
  props: ReactDayPicker.DayPickerProps
): ReactDayPicker.NavigationHtmlProps {
  const { classNames, styles } = props;

  const containerProps = { className: classNames.nav, style: styles.nav };
  const nextProps = {
    className: classNames.navNext,
    style: styles.navNext,
  };
  const prevProps = {
    className: classNames.navPrev,
    style: styles.navPrev,
  };

  return {
    containerProps,
    nextProps,
    prevProps,
  };
}
