import { enUS } from 'date-fns/locale';

import { CaptionLayout } from 'components/Caption';
import { DayPickerContextValue } from 'contexts/DayPicker';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { ClassNames } from 'types/Styles';
import { ModifiersClassNames } from 'types/Modifiers';

export type DefaultContextProps =
  | 'captionLayout'
  | 'classNames'
  | 'formatClassNames'
  | 'formatters'
  | 'locale'
  | 'labels'
  | 'modifiersClassNames'
  | 'formatModifiersClassNames'
  | 'modifiers'
  | 'numberOfMonths'
  | 'styles'
  | 'today'
  | 'mode';

export type DefaultContextValues = Pick<
  DayPickerContextValue,
  DefaultContextProps
>;
/**
 * Returns the default values to use in the DayPickerContext, in case they are
 * not passed down with the DayPicker initial props.
 */
export function getDefaultContextValues(): DefaultContextValues {
  const captionLayout: CaptionLayout = 'buttons';
  const classNames = defaultClassNames;
  const locale = enUS;
  const modifiersClassNames = {};
  const modifiers = {};
  const numberOfMonths = 1;
  const styles = {};
  const today = new Date();
  const formatClassNames = (classNames: Required<ClassNames>) => classNames;
  const formatModifiersClassNames = (classNames: ModifiersClassNames) =>
    classNames;

  return {
    captionLayout,
    classNames,
    formatClassNames,
    formatters,
    labels,
    locale,
    modifiersClassNames,
    formatModifiersClassNames,
    modifiers,
    numberOfMonths,
    styles,
    today,
    mode: 'default'
  };
}
