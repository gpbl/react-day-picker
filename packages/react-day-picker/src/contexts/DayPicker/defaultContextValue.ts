

import enUS from 'date-fns/locale/en-US';

import { CaptionLayout } from 'components/Caption';
import { DayPickerContextValue } from 'contexts/DayPicker';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';

/**
 * Returns the default values to use in the DayPickerContext, in case they are
 * not passed down with the DayPicker initial props.
 */
export function getDefaultContextValue(): DayPickerContextValue {
  const captionLayout: CaptionLayout = 'buttons';
  const classNames = defaultClassNames;
  const locale = enUS;
  const modifiersClassNames = {};
  const modifierPrefix = 'rdp-day_';
  const modifiers = {};
  const numberOfMonths = 1;
  const styles = {};
  const today = new Date();


  return {
    captionLayout,
    classNames,
    formatters,
    labels,
    locale,
    modifiersClassNames,
    modifierPrefix,
    modifiers,
    numberOfMonths,
    styles,
    today
  };
}
