import React, { PropTypes } from 'react';
import { isSameDay } from './DateUtils';

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return e => {
    e.persist();
    handler(e, day, modifiers);
  };
}
export default function Day({
  day,
  tabIndex,
  empty = false,
  modifiers = [],
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  ariaLabel,
  ariaDisabled,
  children,
}) {
  let className = 'DayPicker-Day';
  const cssModifiers = [...modifiers];
  if (isSameDay(day, new Date())) {
    cssModifiers.push('today');
  }
  className += cssModifiers.map(modifier => ` ${className}--${modifier}`).join('');

  if (empty) {
    return <div role="gridcell" aria-disabled className={className} />;
  }

  return (
    <div
      className={className}
      tabIndex={tabIndex}
      role="gridcell"
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled.toString()}
      onKeyDown={handleEvent(onKeyDown, day, modifiers)}
      onMouseEnter={handleEvent(onMouseEnter, day, modifiers)}
      onMouseLeave={handleEvent(onMouseLeave, day, modifiers)}
      onClick={handleEvent(onClick, day, modifiers)}
    >
      {children}
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
  empty: PropTypes.bool,
  modifiers: PropTypes.array,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaDisabled: PropTypes.bool,
};
