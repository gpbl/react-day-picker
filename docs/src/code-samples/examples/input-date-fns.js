import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default function Example() {
  const FORMAT = 'M/D/YYYY';
  return (
    <DayPickerInput
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
    />
  );
}
