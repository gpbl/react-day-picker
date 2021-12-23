import React from 'react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';

import { Placement } from '@popperjs/core';
import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';
// This import is to get prop-types included into the code sandbox, because it's a dependency of focus-trap-react
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PropTypes from 'prop-types';

export default function Example() {
  const formatString = 'P';
  // In your code, you may want to find a way to localize this
  const placeholder = 'mm/dd/yyyy';
  // popper js is a popper positioning library
  const placement: Placement = 'bottom-start';

  const [selected, setSelected] = React.useState<Date>();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = React.useState(false);

  const popperReference = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const popper = usePopper(
    popperReference.current,
    popperElement,
    {
      placement
    }
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    setInputValue(value);
    const date = parse(value, formatString, new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect = (date: Date | undefined) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, formatString));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  const ariaLabel = selected
    ? `Choose date. Selected date is ${format(
        selected,
        formatString
      )}`
    : 'Choose date';

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={popperReference}
        style={{
          padding: '8px 0',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Date
        <input
          type="text"
          style={{
            marginLeft: '4px'
          }}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          ref={buttonRef}
          type="button"
          onClick={handleButtonClick}
          className="clean-btn"
          style={{
            marginLeft: '4px',
            height: '40px',
            width: '40px',
            pointerEvents: isPopperOpen ? 'none' : 'all'
          }}
          aria-label={ariaLabel}
        >
          <span role="img" aria-label="calendar icon">
            📅
          </span>
        </button>
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: () => {
              closePopper();
            }
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </div>
  );
}
