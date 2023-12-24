import { DayPicker } from 'react-day-picker';

import styles from './css-variables.module.css';

export function CssVariables() {
  return <DayPicker className={styles.datePicker} />;
}
