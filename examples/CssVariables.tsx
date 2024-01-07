'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import styles from './styles/css-variables.module.css';

export function CssVariables() {
  return <DayPicker className={styles.datePicker} />;
}
