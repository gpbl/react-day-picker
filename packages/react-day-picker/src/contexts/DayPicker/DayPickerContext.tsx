import React from 'react';

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
import { Components, DayPickerProps } from 'types/DayPicker';
import { Formatters } from 'types/Formatters';
import { Labels } from 'types/Labels';
import { CustomModifiers, ModifierClassNames } from 'types/Modifiers';
import { ClassNames, Styles } from 'types/Styles';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { parseFromToProps } from './utils';

/** The value of the [[DayPickerContext]] */
export interface DayPickerContextValue extends DayPickerProps {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  components: Components;
  formatters: Formatters;
  labels: Labels;
  locale: Locale;
  modifierClassNames: ModifierClassNames;
  modifierPrefix: string;
  modifiers: CustomModifiers;
  numberOfMonths: number;
  styles: Styles;
  today: Date;

  // Internally we handle only fromDate/toDate
  toYear?: never;
  fromYear?: never;
  toMonth?: never;
  fromMonth?: never;
}

/**
 * The DayPicker Context shares the props passed to DayPicker within the
 * internal components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Access this context from the [[useDayPicker]] hook when using custom
 * components.
 */
export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);

/** Represent the props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
  /** The props passed to the DayPicker component. */
  initialProps: DayPickerProps;
  children?: React.ReactNode;
}
/**
 * The provider for the [[DayPickerContext]]. Set the context value by
 * assigning the defaults from the DayPicker props.
 * */
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // TODO: Should this be initialProps.modifierPrefix ?? 'rdp-day_'?
    modifierPrefix: 'rdp-day_',
    modifiers: initialProps.modifiers ?? {},
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
      IconRight: IconRight,
      IconLeft: IconLeft,
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
