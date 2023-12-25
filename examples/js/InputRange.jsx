import { DayPicker } from 'react-day-picker';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import { useState } from 'react';
export function InputRange() {
  const [selectedRange, setSelectedRange] = useState();
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };
  const handleToChange = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };
  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={handleRangeSelect}
      footer={
        <form className="ma2">
          <input
            size={10}
            placeholder="From Date"
            value={fromValue}
            onChange={handleFromChange}
          />
          {' – '}
          <input
            size={10}
            placeholder="To Date"
            value={toValue}
            onChange={handleToChange}
          />
        </form>
      }
    />
  );
}
