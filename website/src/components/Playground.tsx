import * as React from 'react';
import { DayPicker, SelectEventHandler, SelectionType } from 'react-day-picker';

export function Playground() {
  const [type, setType] = React.useState<SelectionType>('single');
  const [required, setRequired] = React.useState(false);
  const fromDate = new Date(2020, 0);
  const toDate = new Date(2021, 11);
  const handleSelection: SelectEventHandler = (selection) => {
    console.log(selection);
  };
  return (
    <>
      <h3>Selecting days</h3>
      <form>
        <label>
          Selection type:{' '}
          <select
            onChange={(e) => setType(e.target.value as SelectionType)}
            value={type}
          >
            <option value="uncontrolled">uncontrolled</option>
            <option value="single">single</option>
            <option value="multiple">multiple</option>
            <option value="range">range</option>
          </select>
        </label>{' '}
        <label>
          <input
            type="checkbox"
            checked={required}
            onChange={(e) => setRequired(e.target.checked)}
          />{' '}
          Required
        </label>
      </form>
      <DayPicker
        type={type}
        required={required}
        fromDate={fromDate}
        toDate={toDate}
        numberOfMonths={2}
        onSelect={handleSelection}
      />
    </>
  );
}
