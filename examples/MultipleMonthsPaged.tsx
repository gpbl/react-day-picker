'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
