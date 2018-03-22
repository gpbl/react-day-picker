// TypeScript Version: 2.2

import * as React from 'react';
import { LocaleUtils, ModifiersUtils, DateUtils } from './utils';
import { ClassNames, DayModifiers, Modifier, Modifiers } from './common';
import {
  CaptionElementProps,
  NavbarElementProps,
  WeekdayElementProps,
  DayPickerProps,
  RoleTypesShape,
} from './props';

export default class DayPicker extends React.Component<DayPickerProps, any> {
  static dayPicker: HTMLDivElement;
  static VERSION: string;
  static LocaleUtils: LocaleUtils;
  static DateUtils: DateUtils;
  static ModifiersUtils: ModifiersUtils;
  static DayModifiers: DayModifiers;
  static Modifiers: Modifiers;
  showMonth(month: Date): void;
  showPreviousMonth(): void;
  showNextMonth(): void;
  showPreviousYear(): void;
  showNextYear(): void;
}
