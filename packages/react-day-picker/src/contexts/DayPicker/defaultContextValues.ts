import enUS from 'date-fns/locale/en-US';

import { Caption, CaptionLayout } from 'components/Caption';
import { CaptionLabel } from 'components/CaptionLabel';
import { Day } from 'components/Day';
import { DayContent } from 'components/DayContent';
import { Dropdown } from 'components/Dropdown';
import { Footer } from 'components/Footer';
import { Head } from 'components/Head';
import { HeadRow } from 'components/HeadRow';
import { IconDropdown } from 'components/IconDropdown';
import { IconLeft } from 'components/IconLeft';
import { IconRight } from 'components/IconRight';
import { Row } from 'components/Row';
import { WeekNumber } from 'components/WeekNumber';
import { DayPickerContextValue } from 'contexts/DayPicker';
import { Components } from 'types/DayPickerBase';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';

export type DefaultContextProps =
  | 'captionLayout'
  | 'classNames'
  | 'components'
  | 'formatters'
  | 'locale'
  | 'labels'
  | 'modifiersClassNames'
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

  const components: Components = {
    Caption,
    CaptionLabel,
    Day,
    DayContent,
    Dropdown,
    Footer,
    Head,
    HeadRow,
    IconDropdown,
    IconRight,
    IconLeft,
    Row,
    WeekNumber
  };

  return {
    captionLayout,
    classNames,
    components,
    formatters,
    labels,
    locale,
    modifiersClassNames,
    modifiers,
    numberOfMonths,
    styles,
    today,
    mode: 'default'
  };
}
