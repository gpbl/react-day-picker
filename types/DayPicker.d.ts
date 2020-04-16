import * as React from 'react';

import { LocaleUtils } from './LocaleUtils';
import { DateUtils } from './DateUtils';
import { DayModifiers, Modifiers, ModifiersUtils } from './Modifiers';
import { DayPickerProps } from './Props';

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
