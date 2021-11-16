import React from 'react';
import { DayPicker } from 'react-day-picker';

export function Example() {
  const [days, setDays] = React.useState([]);

  const footer =
    days.length > 0
      ? `You picked ${days.length} day(s).`
      : `Please pick one or more days.`;

  const removeLastSelected = () => {
    setDays(days.slice(0, days.length - 1))
  }

  const clearSelection = () => {
    setDays([])
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <DayPicker mode="multiple" selected={days} onSelect={setDays} footer={footer} />
      <div style={{display: 'flex', flexDirection: 'column', width: '232px'}}>
        <button disabled={days.length === 0} onClick={removeLastSelected}>Remove most recent selection</button>
        <div style={{height: '10px', width: '100%'}}></div>
        <button disabled={days.length === 0} onClick={clearSelection}>Clear selection</button>
      </div>
    </div>
  );
}
