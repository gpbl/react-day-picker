import React from 'react';
import DayPicker from '../../../src';

const MONTHS = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio',
  'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre',
  'Dicembre'];

const WEEKDAYS_LONG = ['Domenica', 'Lunedì', 'Martedì',
  'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'];

export default function Localized() {
  return (
    <div>
      <DayPicker
        locale="it"
        months={ MONTHS }
        weekdaysLong={ WEEKDAYS_LONG }
        weekdaysShort={ WEEKDAYS_SHORT }
        firstDayOfWeek={ 1 }
        modifiers={ { sunday: day => day.getDay() === 0 } }
      />
    </div>
  );
}
