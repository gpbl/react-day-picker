import * as React from 'react';

import enUS from 'date-fns/locale/en-US';

import { DayPickerProps } from '../../types';

import { Caption } from '../../components/Caption';
import { CaptionLabel } from '../../components/CaptionLabel';
import { Day } from '../../components/Day';
import { DayContent } from '../../components/DayContent';
import { Dropdown } from '../../components/Dropdown';
import { Footer } from '../../components/Footer';
import { Head } from '../../components/Head';
import { IconDropdown } from '../../components/IconDropdown';
import { IconNext } from '../../components/IconNext';
import { IconPrevious } from '../../components/IconPrevious';
import { Row } from '../../components/Row';
import { WeekNumber } from '../../components/WeekNumber';

import { DayPickerContext, DayPickerContextValue } from './DayPickerContext';
import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { parseFromToProps, parseModifierProps } from './utils';

/** Represent the props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
  /** The props passed to the DayPicker component. */
  initialProps: DayPickerProps;
  children?: React.ReactNode;
}
/**
 * The provider for the [[DayPickerContext]].
 */
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
  const { children, initialProps } = props;

  const locale = initialProps.locale ?? enUS;
  const numberOfMonths = initialProps.numberOfMonths ?? 1;
  const today = initialProps.today ?? new Date();

  // Limit navigation
  const { fromDate, toDate } = parseFromToProps(initialProps);

  // Default caption layout. If calendar navigation is unlimited, it must be
  // always `buttons` – as we cannot display infinite options in the dropdown.
  let captionLayout = initialProps.captionLayout ?? 'buttons';
  if (!fromDate && !toDate) captionLayout = 'buttons';

  const modifiers = parseModifierProps(initialProps);

  // Disable days before/after from/toDate
  if (fromDate) {
    modifiers.disabled.push({ before: fromDate });
  }
  if (toDate) {
    modifiers.disabled.push({ after: toDate });
  }

  const { toYear, fromYear, toMonth, fromMonth, ...contextProps } =
    initialProps;

  const context: DayPickerContextValue = {
    ...contextProps,

    captionLayout,

    fromDate,
    toDate,
    today,

    locale,

    modifierClassNames: initialProps.modifierClassNames ?? {},
    modifierPrefix: 'rdp-day_',
    modifiers: modifiers,
    numberOfMonths,

    styles: initialProps.styles ?? {},
    classNames: {
      ...defaultClassNames,
      ...initialProps.classNames
    },
    formatters: {
      ...formatters,
      ...initialProps.formatters
    },
    labels: {
      ...labels,
      ...initialProps.labels
    },
    components: {
      Caption: Caption,
      CaptionLabel: CaptionLabel,
      Day: Day,
      DayContent: DayContent,
      Dropdown: Dropdown,
      Footer: Footer,
      Head: Head,
      IconDropdown: IconDropdown,
      IconNext: IconNext,
      IconPrevious: IconPrevious,
      Row: Row,
      WeekNumber: WeekNumber,
      ...initialProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
}
