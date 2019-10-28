import * as React from 'react';
import { LocaleUtils, ModifiersUtils, DateUtils } from './utils';
import { DayModifiers, Modifiers } from './common';

import { DayPickerProps } from './props';

export default class DayPicker extends React.Component<DayPickerProps, any> {
  static VERSION: string;
  static LocaleUtils: LocaleUtils;
  static DateUtils: DateUtils;
  static ModifiersUtils: ModifiersUtils;
  static DayModifiers: DayModifiers;
  static Modifiers: Modifiers;
  dayPicker: HTMLDivElement;
  focus: () => void;
  showMonth: (month: Date) => void;
  showPreviousMonth: () => void;
  showNextMonth: () => void;
  showPreviousYear: () => void;
  showNextYear: () => void;
}
