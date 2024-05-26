import { UI, UIFlag } from "../UI";
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
    title
  } = useProps();

  const calendar = useCalendar();

  // Apply classnames according to props
  const cssClassNames = [classNames[UI.Calendar]];
  if (className) {
    cssClassNames.push(className);
  }
  if (numberOfMonths > 1) {
    cssClassNames.push(classNames[UIFlag.hasMultipleMonths]);
  }
  if (showWeekNumber) {
    cssClassNames.push(classNames[UIFlag.hasWeekNumbers]);
  }
  if (hideWeekdayRow) {
    cssClassNames.push(classNames[UIFlag.noWeekdays]);
  }

  const Nav = components?.Nav ?? DefaultNav;
  const Months = components?.Months ?? DefaultMonths;
  const MonthGrid = components?.MonthGrid ?? DefaultMonthGrid;
  const Footer = components?.Footer ?? DefaultFooter;

  return (
    <div
      className={cssClassNames.join(" ")}
      style={{ ...styles?.[UI.Calendar], ...style }}
      dir={dir}
      id={id}
      lang={lang}
      nonce={nonce}
      title={title}
      {...dataAttributes}
    >
      <Months className={classNames[UI.Months]} style={styles?.[UI.Months]}>
        {calendar.months.map((month, i) => (
          <MonthGrid aria-labelledby={id} key={i} index={i} month={month} />
        ))}
      </Months>
      {!hideNavigation && <Nav />}
      {footer && (
        <Footer className={classNames[UI.Footer]} style={styles?.[UI.Footer]}>
          {footer}
        </Footer>
      )}
    </div>
  );
}
