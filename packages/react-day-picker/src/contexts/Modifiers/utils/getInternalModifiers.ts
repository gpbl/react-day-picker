import { DayPickerContextValue } from 'contexts/DayPicker';
import { SelectMultipleContextValue } from 'contexts/SelectMultiple';
import { SelectRangeContextValue } from 'contexts/SelectRange';
import { isDayPickerMultiple } from 'types/DayPickerMultiple';
import { isDayPickerRange } from 'types/DayPickerRange';
import { InternalModifier, InternalModifiers } from 'types/Modifiers';

import { toMatcherArray } from './toMatcherArray';

/** Return the [[InternalModifiers]] from the DayPicker and select contexts. */
export function getInternalModifiers(
  dayPicker: DayPickerContextValue,
  selectMultiple: SelectMultipleContextValue,
  selectRange: SelectRangeContextValue
) {
  const internalModifiers: InternalModifiers = {
    [InternalModifier.Selected]: toMatcherArray(dayPicker.selected),
    [InternalModifier.Disabled]: toMatcherArray(dayPicker.disabled),
    [InternalModifier.Hidden]: toMatcherArray(dayPicker.hidden),
    [InternalModifier.Today]: [dayPicker.today],
    [InternalModifier.RangeEnd]: [],
    [InternalModifier.RangeMiddle]: [],
    [InternalModifier.RangeStart]: []
  };

  if (dayPicker.fromDate) {
    internalModifiers.disabled.push({ before: dayPicker.fromDate });
  }
  if (dayPicker.toDate) {
    internalModifiers.disabled.push({ after: dayPicker.toDate });
  }

  if (isDayPickerMultiple(dayPicker)) {
    internalModifiers.disabled = internalModifiers.disabled.concat(
      selectMultiple.modifiers.disabled
    );
  } else if (isDayPickerRange(dayPicker)) {
    internalModifiers.disabled = internalModifiers.disabled.concat(
      selectRange.modifiers.disabled
    );
    internalModifiers.range_start = selectRange.modifiers.range_start;
    internalModifiers.range_middle = selectRange.modifiers.range_middle;
    internalModifiers.range_end = selectRange.modifiers.range_end;
  }
  return internalModifiers;
}
