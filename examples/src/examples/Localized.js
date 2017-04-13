import React from 'react';
import DayPicker from '../../../src';

// Translate month names
const MONTHS = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

// Translate weekdays header
const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'];

// Translate weekdays header titles
const WEEKDAYS_LONG = [
  'Domenica',
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
];

// Translate for aria-label attribute
const LABELS = {
  nextMonth: 'Prossimo mese',
  previousMonth: 'Mese precedente',
};

export default function Localized() {
  return (
    <div>
      <DayPicker
        locale="it"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        labels={LABELS}
        modifiers={{ sunday: day => day.getDay() === 0 }}
      />
    </div>
  );
}
