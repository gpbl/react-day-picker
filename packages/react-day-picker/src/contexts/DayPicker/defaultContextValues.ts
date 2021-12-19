import { enUS } from 'date-fns/locale';

import { Caption, CaptionLayout } from 'components/Caption';
import { CaptionLabel } from 'components/CaptionLabel';
import { Day } from 'components/Day';
import { DayContent } from 'components/DayContent';
import { Dropdown } from 'components/Dropdown';
import { Footer } from 'components/Footer';
import { Head } from 'components/Head';
import { IconDropdown } from 'components/IconDropdown';
import { IconLeft } from 'components/IconLeft';
import { IconRight } from 'components/IconRight';
import { Row } from 'components/Row';
import { WeekNumber } from 'components/WeekNumber';
import { DayPickerContextValue } from 'contexts/DayPicker';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';

export function getDefaultContextValues(): DayPickerContextValue {
  const captionLayout: CaptionLayout = 'buttons';
  const classNames = defaultClassNames;
  const locale = enUS;
  const modifierClassNames = {};
  const modifierPrefix = 'rdp-day_';
  const modifiers = {};
  const numberOfMonths = 1;
  const styles = {};
  const today = new Date();

  const components = {
    Caption: Caption,
    CaptionLabel: CaptionLabel,
    Day: Day,
    DayContent: DayContent,
    Dropdown: Dropdown,
    Footer: Footer,
    Head: Head,
    IconDropdown: IconDropdown,
    IconRight: IconRight,
    IconLeft: IconLeft,
    Row: Row,
    WeekNumber: WeekNumber
  };

  return {
    captionLayout,
    classNames,
    components,
    formatters,
    labels,
    locale,
    modifierClassNames,
    modifierPrefix,
    modifiers,
    numberOfMonths,
    styles,
    today
  };
}
