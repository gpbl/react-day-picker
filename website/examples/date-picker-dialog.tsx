import React from 'react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';

import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isOpen, isOpenSet] = React.useState(false);

  const refEl = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [popperEl, popperElSet] =
    React.useState<HTMLDivElement | null>(null);

  const closePopper = () => {
    isOpenSet(false);
    buttonRef?.current?.focus();
  };

  const { styles, attributes } = usePopper(
    refEl.current,
    popperEl,
    {
      placement: 'bottom-start'
    }
  );

  const dateFormat = 'P';
  const formatDate = (date: Date) => format(date, dateFormat);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const text = event.currentTarget.value;
    setInputValue(text);
    const date = parse(text, dateFormat, new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleDaySelected = (date: Date | undefined) => {
    setSelected(date);
    if (date) {
      setInputValue(formatDate(date));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={refEl}
        style={{
          padding: '4px 0',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Date
        <input
          type="text"
          style={{
            marginLeft: '4px',
            padding: '6px 4px',
            lineHeight: '24px',
            fontSize: '16px',
            height: '40px'
          }}
          placeholder="mm/dd/yyyy"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          ref={buttonRef}
          type="button"
          onClick={() => {
            isOpenSet(true);
          }}
          style={{
            fontSize: '28px',
            lineHeight: '28px',
            marginLeft: '4px',
            padding: '4px',
            height: '40px',
            pointerEvents: isOpen ? 'none' : 'all'
          }}
          aria-label={
            selected
              ? `Choose date. Selected date is ${formatDate(
                  selected
                )}`
              : 'Choose date'
          }
        >
          🗓
        </button>
      </div>
      {isOpen ? (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            setReturnFocus: () => buttonRef.current,
            onDeactivate: () => {
              closePopper();
            }
          }}
        >
          <div
            tabIndex={-1}
            style={styles.popper}
            className="dialog-sheet"
            {...attributes.popper}
            ref={popperElSet}
            role="dialog"
          >
            <DayPicker
              initialFocusOnDay={isOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelected}
            />
          </div>
        </FocusTrap>
      ) : null}
    </div>
  );
}
