import React from 'react';
import DayPicker from '../../../src';

import styles from '../styles/cssmodules.css';

function handleDayClick(day, modifiers) {
  if (modifiers[styles.green]) {
    console.log('This is a green day');
  }
  if (modifiers[styles.sunday]) {
    console.log('This is Sunday');
  }
}

export default function CSSModules() {
  return (
    <DayPicker
      classNames={styles}
      enableOutsideDays
      initialMonth={new Date(2017, 1)}
      selectedDays={new Date(2017, 1, 23)}
      disabledDays={[new Date(2017, 1, 20), new Date(2018, 1, 28)]}
      modifiers={{
        [styles.sunday]: { daysOfWeek: [0] },
        [styles.green]: new Date(2017, 1, 10),
      }}
      onDayClick={handleDayClick}
    />
  );
}
