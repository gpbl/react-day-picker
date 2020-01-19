import React from "react";
import { Month } from "components/Month/Month";

import { getMonths } from "./getMonths";
import { defaultProps } from "./defaultProps";
import { filterUndefinedProps } from "./filterUndefinedProps";

import { getTime } from "date-fns";
import { DayPickerProps, Components, ClassNames } from "./DayPicker";

export const DayPickerControlled: React.FC<DayPickerProps> = (
  initialProps = defaultProps
) => {
  // Extend props with defaults
  const components: Components = {
    ...defaultProps.components,
    ...filterUndefinedProps(initialProps.components)
  };
  const classNames: ClassNames = {
    ...defaultProps.classNames,
    ...filterUndefinedProps(initialProps.classNames)
  };
  const props: DayPickerProps = {
    ...defaultProps,
    ...filterUndefinedProps(initialProps),
    components,
    classNames
  };

  // From `style` prop
  const style = { ...props.styles.container, ...props.style };

  // From `className prop`
  const className = [props.classNames.container];
  if (props.className) {
    className.concat(props.className.split(" "));
  }
  const classNameStr = className.join(" ");

  const months = getMonths(props);

  const { Navigation } = props.components;

  return (
    <div className={classNameStr} style={style} dir={props.dir}>
      {props.showNavigation && <Navigation dayPickerProps={props} />}
      <div
        className={props.classNames.months}
        style={props.styles ? props.styles.month : undefined}
      >
        {months.map((month: Date) => (
          <Month key={getTime(month)} month={month} dayPickerProps={props} />
        ))}
      </div>
    </div>
  );
};
