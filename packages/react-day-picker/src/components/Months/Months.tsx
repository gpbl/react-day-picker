import React from "react";
import { MonthTable } from "../MonthTable";
import { getTime } from "date-fns";

import { getMonths } from "./helpers/getMonths";
import { filterUndefinedProps } from "./helpers/filterUndefinedProps";
import { defaultProps } from "../DayPicker/defaults/defaultProps";
import {
  SwizzlingComponents,
  DayPickerClassNames,
  DayPickerProps
} from "../DayPicker";

/**
 * Render the months and the navigation.
 *
 * @private
 * @category Components
 */
export function Months(initialProps = defaultProps): JSX.Element {
  // Extend props with defaults
  const swizzle: SwizzlingComponents = Object.assign(
    {},
    defaultProps.swizzle,
    initialProps.swizzle
  );
  const classNames: DayPickerClassNames = Object.assign(
    {},
    defaultProps.classNames,
    initialProps.classNames
  );
  const props: DayPickerProps = {
    ...defaultProps,
    ...filterUndefinedProps(initialProps),
    swizzle,
    classNames
  };

  // From `style` prop
  const style = { ...props.styles?.root, ...props.style };

  // From `className prop`
  const className = [props.classNames?.root || ""];
  if (props.className) {
    className.concat(props.className.split(" "));
  }

  const months = getMonths(props);

  const Navigation = props.swizzle?.Navigation!;

  return (
    <div className={className.join(" ")} style={style} dir={props.dir}>
      {props.showNavigation && props.onMonthChange && (
        <Navigation dayPickerProps={props} />
      )}
      <div
        className={props.classNames?.months}
        style={props.styles ? props.styles.month : undefined}
      >
        {months.map((month: Date) => (
          <MonthTable
            key={getTime(month)}
            month={month}
            dayPickerProps={props}
          />
        ))}
      </div>
    </div>
  );
}
