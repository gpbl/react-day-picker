import { UI } from "../UI";
import { useCalendar } from "../contexts/calendar";
import { useProps } from "../contexts/props";

import { Footer as DefaultFooter } from "./Footer";
import { MonthGrid as DefaultMonthGrid } from "./MonthGrid";
import { Months as DefaultMonths } from "./Months";
import { Nav as DefaultNav } from "./Nav";

/**
 * Render the DayPicker Calendar with navigation and the month grids.
 *
 * @group Components
 */
export function Calendar() {
  const {
    className,
    classNames,
    components,
    dataAttributes,
    dir,
    footer,
    hideNavigation,
    hideWeekdayRow,
    id,
    lang,
    nonce,
    numberOfMonths,
    showWeekNumber,
    style,
    styles,
    title,
    dropdownNavigation
  } = useProps();

  const calendar = useCalendar();

  // Apply classnames according to props
  const cssClassNames = [classNames.rdp];
  if (className) {
    cssClassNames.push(className);
  }
  if (numberOfMonths > 1) {
    cssClassNames.push(classNames.multiple_months);
  }
  if (showWeekNumber) {
    cssClassNames.push(UI.WithWeekNumber);
  }
  if (hideWeekdayRow) {
    cssClassNames.push(classNames[UI.HideWeekdays]);
  }

  const Nav = components?.Nav ?? DefaultNav;
  const Months = components?.Months ?? DefaultMonths;
  const MonthGrid = components?.MonthGrid ?? DefaultMonthGrid;
  const Footer = components?.Footer ?? DefaultFooter;

  return (
    <div
      className={cssClassNames.join(" ")}
      style={{ ...styles?.rdp, ...style }}
      dir={dir}
      id={id}
      lang={lang}
      nonce={nonce}
      title={title}
      {...dataAttributes}
    >
      {dropdownNavigation && !hideNavigation && <Nav />}
      <Months
        className={classNames.months_wrapper}
        style={styles?.months_wrapper}
      >
        {calendar.months.map((month, i) => (
          <MonthGrid aria-labelledby={id} key={i} index={i} month={month} />
        ))}
      </Months>
      {footer && (
        <Footer className={classNames.footer} style={styles?.footer}>
          {footer}
        </Footer>
      )}
    </div>
  );
}
