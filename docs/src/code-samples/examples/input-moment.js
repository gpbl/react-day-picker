import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

export default function Example() {
  return (
    <div>
      <p>In English (default):</p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
      />
      <p>
        In Italian, using <code>{'format="LL"'}</code>:
      </p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format="LL"
        placeholder={`${formatDate(new Date(), 'LL', 'it')}`}
        dayPickerProps={{
          locale: 'it',
          localeUtils: MomentLocaleUtils,
        }}
      />
    </div>
  );
}
