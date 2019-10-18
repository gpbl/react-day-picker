// TypeScript Version: 3.1

import * as React from 'react';
import { LocaleUtils, ModifiersUtils, DateUtils } from './utils';
import { ClassNames, DayModifiers, Modifier, Modifiers } from './common';
import {
  CaptionElementProps,
  NavbarElementProps,
  WeekdayElementProps,
  DayPickerProps,
} from './props';

export default class DayPicker extends React.Component<DayPickerProps, any> {
  static VERSION: string;
  static LocaleUtils: typeof LocaleUtils;
  static DateUtils: typeof DateUtils;
  static ModifiersUtils: typeof ModifiersUtils;
  static DayModifiers: DayModifiers;
  static Modifiers: Modifiers;
  readonly dayPicker: HTMLDivElement;
  focus(): void;
  showMonth(month: Date): void;
  showPreviousMonth(): void;
  showNextMonth(): void;
  showPreviousYear(): void;
  showNextYear(): void;
}
