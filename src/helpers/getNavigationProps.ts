import {
  DayPickerProps,
  NavigationHtmlProps,
} from '../../typings/react-day-picker';

/**
 * Return the props for the Navigation component and its children.
 */
export function getNavigationProps(props: DayPickerProps): NavigationHtmlProps {
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
  const startProps = {
    className: classNames.navStart,
    style: styles.navStart,
  };

  return {
    containerProps,
    nextProps,
    prevProps,
    startProps,
  };
}
