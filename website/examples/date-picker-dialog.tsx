import React, { ChangeEventHandler } from 'react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';

import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = React.useState(false);

  const popperRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start'
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    const { value } = e.currentTarget;
    setInputValue(value);
    const date = parse(value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect = (date: Date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div>
      <div ref={popperRef}>
        <input
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          ref={buttonRef}
          type="button"
          aria-label="Pick a date"
          onClick={handleButtonClick}
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
            onDeactivate: closePopper
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
