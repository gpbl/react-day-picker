import { addMonths, getTime } from 'date-fns';
import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState
} from 'react';

import { RootProps } from '../../types/RootProps';
import { Table } from '../Table';
import { getMonths } from './utils/getMonths';

export function Root(props: RootProps): JSX.Element {
  const monthsEl = useRef(null);
  const { dayPickerProps } = props;
  const {
    components,
    className,
    classNames,
    style,
    styles,
    dir,
    showNavigation,
    onMonthChange,
    month
  } = dayPickerProps;
  const { Navigation } = components;

  const months = getMonths(dayPickerProps);

  const rootClassNames = [classNames?.Root ?? ''];
  if (className) {
    rootClassNames.concat(className.split(' '));
  }

  const [focused, setFocused] = useState(false);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (!focused) return;
    if (e.key === (dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft')) {
      onMonthChange?.(addMonths(month, 1), e);
    }
    if (e.key === (dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight')) {
      onMonthChange?.(addMonths(month, -1), e);
    }
  };

  const handleFocus: FocusEventHandler = (e) => {
    if (e.target !== monthsEl.current) return;
    setFocused(true);
  };
  const handleBlur: FocusEventHandler = () => {
    if (!focused) return;
    setFocused(false);
  };

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.Root, ...style }}
      dir={dir}
    >
      <div
        className={classNames?.Months}
        style={styles?.Month}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        ref={monthsEl}
      >
        {months.map((month: Date) => (
          <div className={classNames?.Month} key={getTime(month)}>
            <Table month={month} dayPickerProps={dayPickerProps} />
          </div>
        ))}
      </div>
      {showNavigation && onMonthChange && (
        <Navigation dayPickerProps={dayPickerProps} />
      )}
    </div>
  );
}
