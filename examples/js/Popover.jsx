import { createRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isValid, parse } from 'date-fns';
import { usePopper } from 'react-popper';
export function Popover() {
  const [selected, setSelected] = useState();
  const [inputValue, setInputValue] = useState('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const popperRef = createRef();
  const buttonRef = createRef();
  const [popperElement, setPopperElement] = useState(null);
  const popper = usePopper(buttonRef.current, popperElement, {
    placement: 'bottom-start'
  });
  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };
  const handleButtonClick = () => {
    setIsPopperOpen(!isPopperOpen);
  };
  const handleDaySelect = (date) => {
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
          name="date"
          size={12}
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button ref={buttonRef} type="button" onClick={handleButtonClick}>
          Pick a Date
        </button>
      </div>
      <div
        style={popper.styles.popper}
        className="dialog-sheet nx-bg-white nx-shadow-sm bg-white rounded-lg overflow-hidden"
        hidden={!isPopperOpen}
        {...popper.attributes.popper}
      >
        <div
          tabIndex={0}
          ref={setPopperElement}
          role="dialog"
          aria-label="DayPicker calendar"
        >
          <DayPicker
            autoFocus
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
          />
        </div>
      </div>
    </div>
  );
}
