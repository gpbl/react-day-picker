import { createContext, PropsWithChildren, useContext, useId } from 'react';

import { DayPickerProps } from '../../DayPicker';

import { getClassNames } from './utils/getClassNames';
import { getLabels } from './utils/getLabels';
import { getFormatters } from './utils/getFormatters';
import { getDataAttributes } from './utils/getDataAttributes';
import { ClassNames, Formatters, Labels, Mode } from '../../types';
import { DataAttributes } from '../ModifiersContext';

/**
 * The `DayPickerProps` with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export type DayPickerContext<T extends Mode> = DayPickerProps<T> & {
  classNames: ClassNames;
  dataAttributes: DataAttributes;
  formatters: Formatters;
  id: string;
  labels: Labels;
  numberOfMonths: number;
  today: Date;
  required: boolean;
  min: number | undefined;
  max: number | undefined;
};

export const dayPickerContext = createContext<DayPickerContext<Mode> | null>(
  null
);

/**
 * The provider for the `dayPickerContext`, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
export const DayPickerProvider = <T extends Mode>(
  props: PropsWithChildren<DayPickerProps<T>>
) => {
  const reactId = useId();
  const {
    children,
    classNames,
    formatters,
    id = reactId,
    labels,
    numberOfMonths = 1,
    today = new Date(),
    ...restProps
  } = props;

  const context = {
    ...restProps,
    classNames: getClassNames(classNames),
    dataAttributes: getDataAttributes(props),
    formatters: getFormatters(formatters),
    id,
    labels: getLabels(labels),
    numberOfMonths,
    required: 'required' in props ? props.required ?? false : false,
    min: 'min' in props ? props.min ?? undefined : undefined,
    max: 'max' in props ? props.max ?? undefined : undefined,
    today
  };

  return (
    <dayPickerContext.Provider value={context}>
      {children}
    </dayPickerContext.Provider>
  );
};

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
