import { enUS } from 'date-fns/locale';
import { createContext, PropsWithChildren, useContext, useId } from 'react';

import { CaptionLayout } from '../../components/Nav';
import { DayPickerProps } from '../../DayPicker';
import { Mode } from '../../types/PropsBase';
import * as formatters from '../../formatters';
import * as labels from '../../labels';
import {
  ClassNames,
  ColorScheme,
  ContrastPreference,
  Formatters,
  Labels
} from '../../types';

import { defaultClassNames } from './defaultClassNames';
import { getFromToDate } from './utils/getFromToDate';
import { getClassNames } from './utils/getClassNames';
import { getLabels } from './utils/getLabels';
import { getFormatters } from './utils/getFormatters';
import { getDataAttributes } from './utils/getDataAttributes';

/** Represents the defaults internally used when not passed via props */
export type DefaultProps = {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  colorScheme: ColorScheme;
  contrastPreference: ContrastPreference;
  formatters: Required<Formatters>;
  id: string;
  labels: Labels;
  locale: Locale;
  mode: Mode;
  required: boolean;
  numberOfMonths: number;
  today: Date;
  fromDate: Date | undefined;
  toDate: Date | undefined;
  min: number | undefined;
  max: number | undefined;
};

/**
 * The `DayPickerProps` with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext = DayPickerProps &
  DefaultProps & { dataAttributes: Record<string, unknown> };

export const dayPickerContext = createContext<DayPickerContext | null>(null);

/**
 * The provider for the `dayPickerContext`, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider(props: PropsWithChildren<DayPickerProps>) {
  const id = useId();

  const { fromDate, toDate } = getFromToDate(props);

  const defaultProps: DefaultProps = {
    captionLayout: 'buttons',
    classNames: defaultClassNames,
    colorScheme: 'auto',
    contrastPreference: 'no_preference',
    formatters,
    fromDate,
    id,
    labels,
    locale: enUS,
    max: undefined,
    min: undefined,
    mode: 'single',
    numberOfMonths: 1,
    required: false,
    toDate,
    today: new Date()
  };

  const context = {
    ...defaultProps,
    ...props,
    classNames: getClassNames(props),
    labels: getLabels(props),
    formatters: getFormatters(props),
    dataAttributes: getDataAttributes(props)
  } as unknown as DayPickerContext;

  return (
    <dayPickerContext.Provider value={context}>
      {props.children}
    </dayPickerContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components.
 */
export function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(
      'useDayPicker must be used within a `<dayPickerContext.Provider/>`.'
    );

  return context;
}
