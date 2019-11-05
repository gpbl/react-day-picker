import * as React from 'react';
import { getTime, startOfMonth } from 'date-fns';

import { getMonths } from './helpers/getMonths';
import { defaultProps } from './defaultProps';

import { Month } from './Month';

import { filterUndefinedProps } from './utils/filterUndefinedProps';
import { DayPickerProps } from '../typings/react-day-picker';

const DayPickerControlled: React.FC<DayPickerProps> = (
  initialProps = defaultProps
) => {
  // Extend props with defaults
  const components: ReactDayPicker.Components = {
    ...defaultProps.components,
    ...filterUndefinedProps(initialProps.components),
  };
  const classNames: ReactDayPicker.ClassNames = {
    ...defaultProps.classNames,
    ...filterUndefinedProps(initialProps.classNames),
  };
  const props: ReactDayPicker.DayPickerProps = {
    ...defaultProps,
    ...filterUndefinedProps(initialProps),
    components,
    classNames,
  };

  // From `style` prop
  const style = { ...props.styles.container, ...props.style };

  // From `className prop`
  const className = [props.classNames.container];
  if (props.className) {
    className.concat(props.className.split(' '));
  }
  const classNameStr = className.join(' ');

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

export const DayPicker: React.FC<ReactDayPicker.DayPickerProps> = (
  initialProps: ReactDayPicker.DayPickerProps
) => {
  const { initialMonth, ...props } = initialProps;
  const isControlled = Boolean(props.month);

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(initialMonth || new Date())
  );

  function handleMonthChange(month: Date, e: React.MouseEvent) {
    setCurrentMonth(month);
    if (props.onMonthChange) {
      props.onMonthChange(month, e);
    }
  }

  return (
    <DayPickerControlled
      {...props}
      onMonthChange={isControlled ? props.onMonthChange : handleMonthChange}
      month={isControlled ? props.month : currentMonth}
    />
  );
};
