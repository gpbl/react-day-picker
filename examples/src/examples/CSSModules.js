import React from 'react';
import DayPicker from '../../../src';

import styles from '../styles/cssmodules.css';

export default function CSSModules() {
  return (
    <DayPicker
      classNames={styles}
      enableOutsideDays
      initialMonth={new Date(2017, 1)}
      selectedDays={new Date(2017, 1, 23)}
      disabledDays={[new Date(2017, 1, 20), new Date(2018, 1, 28)]}
      modifiers={{
        [styles.sunday]: day => day.getDay() === 0,
        [styles.green]: new Date(2017, 1, 10),
      }}
    />
  );
}
