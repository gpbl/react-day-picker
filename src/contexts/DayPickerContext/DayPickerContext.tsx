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
import { parseFromToProps } from './utils/parseFromToProps';

/** A record with `data-*` attributes passed to {@link DayPicker}. */
export type DataAttributes = Record<string, unknown>;

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
};

/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext = DayPickerProps &
  DefaultProps & { dataAttributes: DataAttributes };

export const dayPickerContext = createContext<DayPickerContext | null>(null);

/**
 * The provider for the {@link dayPickerContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export function DayPickerProvider(props: PropsWithChildren<DayPickerProps>) {
  const dataAttributes: DataAttributes = {};
  const id = useId();

  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith('data-')) {
      dataAttributes[key] = val;
    }
  });

  const { fromDate, toDate } = parseFromToProps(props);

  const defaultProps: DefaultProps = {
    mode: 'single',
    required: false,
    fromDate,
    toDate,
    captionLayout: 'buttons',
    classNames: defaultClassNames,
    colorScheme: 'auto',
    contrastPreference: 'no-preference',
    formatters,
    id,
    labels,
    locale: enUS,
    numberOfMonths: 1,
    today: new Date()
  };

  const context = {
    ...defaultProps,
    ...props,
    classNames: {
      ...defaultProps.classNames,
      ...props.classNames
    },
    labels: {
      ...defaultProps.labels,
      ...props.labels
    },
    formatters: {
      ...defaultProps.formatters,
      ...props.formatters
    },
    dataAttributes
  } as unknown as DayPickerContext;

  return (
    <dayPickerContext.Provider value={context}>
      {props.children}
    </dayPickerContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components. */
export function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
