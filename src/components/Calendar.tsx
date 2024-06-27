import React from "react"

import { UI, CalendarFlag } from "../UI.js"
import { useCalendar, useProps } from "../contexts/index.js"

import { Footer as DefaultFooter } from "./Footer.js"
import { Month as DefaultMonth } from "./Month.js"
import { Months as DefaultMonths } from "./Months.js"
import { Nav as DefaultNav } from "./Nav.js"

/**
 * Render the DayPicker Calendar with navigation and the month grids.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
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
    cssClassNames.push(classNames[CalendarFlag.has_multiple_months]);
  }
  if (showWeekNumber) {
    cssClassNames.push(classNames[CalendarFlag.has_week_numbers]);
  }
  if (hideWeekdayRow) {
    cssClassNames.push(classNames[CalendarFlag.no_weekdays]);
  }

  const Nav = components?.Nav ?? DefaultNav;
  const Months = components?.Months ?? DefaultMonths;
  const Month = components?.Month ?? DefaultMonth;
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
        {!hideNavigation && <Nav />}
        {calendar.months.map((month, i) => (
          <Month aria-labelledby={id} key={i} index={i} month={month} />
        ))}
      </Months>
      {footer && (
        <Footer className={classNames[UI.Footer]} style={styles?.[UI.Footer]}>
          {footer}
        </Footer>
      )}
    </div>
  );
}
