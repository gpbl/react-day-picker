import { DayPickerProps } from "../DayPicker";
import { NavigationHtmlProps } from "../../types/Navigation";

/**
 * Return the props for the Navigation component and its children.
 *
 * @category Swizzle Helpers
 * @private
 */
export function getNavigationProps(props: DayPickerProps): NavigationHtmlProps {
  const { classNames, styles } = props;

  const containerProps = { className: classNames.nav, style: styles.nav };
  const nextProps = {
    className: classNames.navNext,
    style: styles.navNext
  };
  const prevProps = {
    className: classNames.navPrev,
    style: styles.navPrev
  };

  return {
    containerProps,
    nextProps,
    prevProps
  };
}
