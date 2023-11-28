import { enUS } from 'date-fns/locale';
import { PropsWithChildren, useId } from 'react';
import { DayPickerProps } from '../../DayPicker';
import { defaultClassNames } from './defaultClassNames';
import { getFromToDate } from './utils/getFromToDate';
import { getClassNames } from './utils/getClassNames';
import { getLabels } from './utils/getLabels';
import { getFormatters } from './utils/getFormatters';
import { getDataAttributes } from './utils/getDataAttributes';
import {
  DefaultProps,
  DayPickerContext,
  dayPickerContext
} from './DayPickerContext';

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
