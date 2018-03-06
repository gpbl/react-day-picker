import DayPicker from './DayPicker';
import Input from './DayPickerInput';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import * as ModifiersUtils from './ModifiersUtils';

DayPicker.Input = Input;
DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

export { DayPicker as default, DateUtils, LocaleUtils, ModifiersUtils };
