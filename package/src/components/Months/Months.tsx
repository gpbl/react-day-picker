import React from "react";
import { Month } from "../Month/Month";
import { getTime } from "date-fns";

import { getMonths } from "./helpers/getMonths";
import { filterUndefinedProps } from "./helpers/filterUndefinedProps";
import { defaultProps } from "../DayPicker/defaults/defaultProps";
import { SwizzlingComponents, ClassNames, DayPickerProps } from "../DayPicker";

/**
 * Render the months and the navigation.
 *
 * @category Components
 * @private
 */
export function Months(initialProps = defaultProps): JSX.Element {
  // Extend props with defaults
  const swizzle: SwizzlingComponents = {
    ...defaultProps.swizzle!,
    ...initialProps.swizzle
  };
  const classNames: ClassNames = {
    ...defaultProps.classNames,
    ...initialProps.classNames
  };
  const props: DayPickerProps = {
    ...defaultProps,
    ...filterUndefinedProps(initialProps),
    swizzle,
    classNames
  };

  // From `style` prop
  const style = { ...props.styles?.container, ...props.style };

  // From `className prop`
  const className = [props.classNames?.container || ""];
  if (props.className) {
    className.concat(props.className.split(" "));
  }
  const classNameStr = className.join(" ");

  const months = getMonths(props);

  const { Navigation } = props.swizzle!;

  return (
    <div className={classNameStr} style={style} dir={props.dir}>
      {props.showNavigation && <Navigation dayPickerProps={props} />}
      <div
        className={props.classNames?.months}
        style={props.styles ? props.styles.month : undefined}
      >
        {months.map((month: Date) => (
          <Month key={getTime(month)} month={month} dayPickerProps={props} />
        ))}
      </div>
    </div>
  );
}
