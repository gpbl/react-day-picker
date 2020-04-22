import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';

export default function CustomizationProps() {
  const [selected, setSelected] = useState();

  const [fixedWeeks, setFixedWeeks] = useState(true);
  const [showCaption, setShowCaption] = useState(true);
  const [showHead, setShowHead] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showOutsideDays, setShowOutsideDays] = useState(true);
  const [enableOutsideDaysClick, setEnableOutsideDaysClick] = useState(false);
  const [showWeekNumber, setShowWeekNumber] = useState(true);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <DayPicker
          selected={selected}
          onDayClick={setSelected}
          fixedWeeks={fixedWeeks}
          showCaption={showCaption}
          showHead={showHead}
          showNavigation={showNavigation}
          showOutsideDays={showOutsideDays}
          enableOutsideDaysClick={enableOutsideDaysClick}
          showWeekNumber={showWeekNumber}
        />
      </div>
      <div style={{ paddingLeft: '2em' }}>
        <h3>Feature Props</h3>
        <label>
          <input
            type="checkbox"
            checked={fixedWeeks}
            onChange={(e) => setFixedWeeks(e.target.checked)}
          />{' '}
          <code>fixedWeeks={`${fixedWeeks}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showCaption}
            onChange={(e) => setShowCaption(e.target.checked)}
          />{' '}
          <code>showCaption={`${showCaption}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showHead}
            onChange={(e) => setShowHead(e.target.checked)}
          />{' '}
          <code>showHead={`${showHead}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showOutsideDays}
            onChange={(e) => setShowOutsideDays(e.target.checked)}
          />{' '}
          <code>showOutsideDays={`${showOutsideDays}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={enableOutsideDaysClick}
            onChange={(e) => setEnableOutsideDaysClick(e.target.checked)}
          />{' '}
          <code>enableOutsideDaysClick={`${enableOutsideDaysClick}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showNavigation}
            onChange={(e) => setShowNavigation(e.target.checked)}
          />{' '}
          <code>showNavigation={`${showNavigation}`}</code>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={showWeekNumber}
            onChange={(e) => setShowWeekNumber(e.target.checked)}
          />{' '}
          <code>showWeekNumber={`${showWeekNumber}`}</code>
        </label>
      </div>
    </div>
  );
}
