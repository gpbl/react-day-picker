import * as React from 'react';
import { getTime, startOfMonth } from 'date-fns';

import { prepareDayPicker } from './helpers/prepareDayPicker';
import { defaultProps } from './defaultProps';

import { Month } from './Month';

import { filterUndefinedProps } from './utils/filterUndefinedProps';
import { DayPickerProps, Components, ClassNames } from './types';

const _DayPicker: React.FC<DayPickerProps> = (initialProps = defaultProps) => {
  // Extend props with defaults
  const components: Components = {
    ...defaultProps.components,
    ...filterUndefinedProps(initialProps.components),
  };
  const classNames: ClassNames = {
    ...defaultProps.classNames,
    ...filterUndefinedProps(initialProps.classNames),
  };
  const props: DayPickerProps = {
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

  const { months } = prepareDayPicker(props);
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

export const DayPicker: React.FC<DayPickerProps> = ({
  initialMonth,
  ...props
}) => {
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
    <_DayPicker
      {...props}
      onMonthChange={!isControlled ? handleMonthChange : props.onMonthChange}
      month={isControlled ? props.month : currentMonth}
    />
  );
};
