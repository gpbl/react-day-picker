/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

import React, { Component } from 'react';
import defaultClassNames from './classNames';
import PropTypes from './PropTypes';

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return e => {
    e.persist();
    handler(day, modifiers, e);
  };
}

export default class Day extends Component {
  static propTypes = {
    classNames: PropTypes.shape({
      day: PropTypes.string.isRequired,
    }).isRequired,

    day: PropTypes.instanceOf(Date).isRequired,
    children: PropTypes.node.isRequired,

    ariaDisabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    ariaSelected: PropTypes.bool,
    empty: PropTypes.bool,
    modifiers: PropTypes.object,
    modifiersStyles: PropTypes.object,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    onFocus: PropTypes.func,
    tabIndex: PropTypes.number,
  };

  static defaultProps = {
    modifiers: {},
    empty: false,
  };

  shouldComponentUpdate(nextProps) {
    const modifiers = Object.keys(this.props.modifiers).sort();
    const nextModifiers = Object.keys(nextProps.modifiers).sort();
    return modifiers.join() !== nextModifiers.join();
  }

  render() {
    const {
      classNames,
      modifiersStyles,
      day,
      tabIndex,
      empty,
      modifiers,
      onMouseEnter,
      onMouseLeave,
      onClick,
      onKeyDown,
      onTouchStart,
      onTouchEnd,
      onFocus,
      ariaLabel,
      ariaDisabled,
      ariaSelected,
      children,
    } = this.props;

    let className = classNames.day;
    if (classNames !== defaultClassNames) {
      // When using CSS modules prefix the modifier as required by the BEM syntax
      className += ` ${Object.keys(modifiers).join(' ')}`;
    } else {
      className += Object.keys(modifiers)
        .map(modifier => ` ${className}--${modifier}`)
        .join('');
    }

    let style;
    if (modifiersStyles) {
      Object.keys(modifiers)
        .filter(modifier => !!modifiersStyles[modifier])
        .forEach(modifier => {
          style = Object.assign({}, style, modifiersStyles[modifier]);
        });
    }

    if (empty) {
      return (
        <div
          role="gridcell"
          aria-disabled
          className={className}
          style={style}
        />
      );
    }
    return (
      <div
        className={className}
        tabIndex={tabIndex || 0}
        style={style}
        role="gridcell"
        aria-label={ariaLabel}
        aria-disabled={ariaDisabled.toString()}
        aria-selected={ariaSelected.toString()}
        onClick={handleEvent(onClick, day, modifiers)}
        onKeyDown={handleEvent(onKeyDown, day, modifiers)}
        onMouseEnter={handleEvent(onMouseEnter, day, modifiers)}
        onMouseLeave={handleEvent(onMouseLeave, day, modifiers)}
        onTouchEnd={handleEvent(onTouchEnd, day, modifiers)}
        onTouchStart={handleEvent(onTouchStart, day, modifiers)}
        onFocus={handleEvent(onFocus, day, modifiers)}
      >
        {children}
      </div>
    );
  }
}
