import english from 'date-fns/locale/en-US';

import { DayPickerContextValue } from '../../../types';
import { defaultClassNames } from './defaultClassNames';
import { defaultComponents } from './defaultComponents';
import { defaultFormatters } from './defaultFormatters';
import { defaultLabels } from './defaultLabels';
import { defaultModifiers } from './defaultModifiers';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function noop(): void {};

export const defaultContext: DayPickerContextValue = {
  classNames: defaultClassNames,
  components: defaultComponents,
  formatters: defaultFormatters,
  labels: defaultLabels,
  locale: english,
  modifierPrefix: 'rdp-day_',
  modifiers: defaultModifiers,
  captionLayout: 'buttons',
  numberOfMonths: 1,
  originalProps: {},
  today: new Date(),
  mode: 'single',
  // These will be replaced by proper event handlers in DayPicker.tsx so we can
  // safely use noop here
  onMonthChange: noop,
  onDayBlur: noop,
  onDayClick: noop,
  onDayFocus: noop,
  onDayKeyDown: noop
};
