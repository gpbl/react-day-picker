import { createContext, PropsWithChildren, useContext, useId } from 'react';

import type { DayPickerProps } from '../../DayPicker';
import type { Formatters } from '../../types/formatters';
import type { Labels } from '../../types/labels';
import type { Mode } from '../../types/props';
import type { ClassNames } from '../../types/ui';
import type { DataAttributes } from '../ModifiersContext';
import { getClassNames } from './utils/getClassNames';
import { getDataAttributes } from './utils/getDataAttributes';
import { getFormatters } from './utils/getFormatters';
import { getFromToDate } from './utils/getFromToDate';
import { getLabels } from './utils/getLabels';

export type DayPickerContext<T extends Mode> = DayPickerProps<T> & {
  classNames: ClassNames;
  dataAttributes: DataAttributes;
  formatters: Formatters;
  fromDate: Date | undefined;
  id: string;
  labels: Labels;
  max: number | undefined;
  min: number | undefined;
  mode: Mode;
  numberOfMonths: number;
  required: boolean;
  toDate: Date | undefined;
  today: Date;
};

export const dayPickerContext = createContext<DayPickerContext<Mode> | null>(
  null
);

/**
 * The provider for the `dayPickerContext`, storing the props and setting its
 * defaults. Must be the root of all the providers.
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

  const { fromDate, toDate } = getFromToDate(props);

  const context = {
    ...restProps,
    classNames: getClassNames(classNames),
    dataAttributes: getDataAttributes(props),
    formatters: getFormatters(formatters),
    fromDate,
    id,
    labels: getLabels(labels),
    numberOfMonths,
    required: 'required' in props ? props.required ?? false : false,
    min: 'min' in props ? props.min ?? undefined : undefined,
    max: 'max' in props ? props.max ?? undefined : undefined,
    mode: props.mode ?? 'single',
    today,
    toDate
  };

  return (
    <dayPickerContext.Provider value={context}>
      {children}
    </dayPickerContext.Provider>
  );
};

/** Use this hook to access to the DayPicker context within Custom Components. */
export function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(
      'useDayPicker must be used within a `<dayPickerContext.Provider/>`.'
    );

  return context;
}
